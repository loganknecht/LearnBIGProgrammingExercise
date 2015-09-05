// TODO: provide naming syntax clarity. snake_style for vars, camelCase for methods, and pascalCase for classes
var BasePool = require('./BasePool');

module.exports = (function() {
    function NumberPool(start_range, end_range) {
        this.initialize(start_range, end_range);
    }
    NumberPool.prototype = new BasePool();
    NumberPool.prototype.constructor = NumberPool;
    NumberPool.prototype.initialize = function initialize(start_range, end_range) {
        // Base does its default behaviour
        BasePool.prototype.initialize.call(this);

        // assumes start and end range are inclusive
        // assumes that only integers are to be allowed
        // assumes that all integers are available from -Infinity to Infinity
        // assumes the constraint that 0 cannot allocated because it needs to be 
        //     returned for the allocate() function

        // if number, and not decimal
        if(!_.isNumber(start_range) || (start_range % 1 != 0)) {
            throw new TypeError('The NumberPool\'s constructor has a first parameter "start_range" that must be an integer only. Please fix this.\nStart Range was: ', start_range);
        }
        // if number, and not decimal
        if(!_.isNumber(end_range) || (end_range % 1 != 0)) {
            throw new TypeError('The NumberPool\'s constructor has a first parameter "end_range" that must be an integer only. Please fix this.\nStart Range was: ', end_range);
        }
        if(start_range > end_range) {
            throw new RangeError('Start range, must be less than or equal to the end range.\nStart Range Given: ' + start_range + '\nEnd Range Given: ' + end_range);
        }

        // Creates the bounds property
        this.bounds = [start_range, end_range];

        // I didn't really want to get clever here. Just iterate and create the
        // values from 1 to N, but ignores 0
        var new_pool = [];
        var total_range = end_range - start_range + 1; // add the extra bit for the inclusive number
        for(var i = 0; i < total_range; i++) {
            if(i + start_range != 0) {
                new_pool.push(i + start_range);
            }
        }
        this.setPool(new_pool);
    }
    NumberPool.prototype.getBounds = function getBounds() {
        return this.bounds;
    };
    NumberPool.prototype.getMinBoundary = function getMinBoundary() {
        return this.getBounds()[0];
    };
    NumberPool.prototype.getMaxBoundary = function getMinBoundary() {
        return this.getBounds()[1];
    };
    NumberPool.prototype.allocate = function allocate() {
        BasePool.prototype.allocate.call(this);
        // The Allocate method picks an available value from the pool, removes it
        // from the pool, and returns this value to the caller.If the pool of 
        // available numbers is empty, the Allocate method returns 0.
        return 0;
    };
    NumberPool.prototype.release = function release(x) {
        BasePool.prototype.release.call(this, x);
        // The Release method adds an available number value back to the pool. If 
        // the value is successfully added back to the pool, Release returns true.
        // If the value is already in the pool, then false is returned.
        return false
    };
    NumberPool.prototype.setPool = function setPool(new_pool) {
        BasePool.prototype.setPool.call(this, new_pool);
    };
    NumberPool.prototype.getPool = function getPool() {
        return BasePool.prototype.getPool.call(this);
    };
    NumberPool.prototype.searchPool = function searchPool(object_to_search_for) {
        // returns true for found, false for did not
    };
    NumberPool.prototype.getType = function getType() {
        return 'NumberPool';
    };

    return NumberPool;
})();
