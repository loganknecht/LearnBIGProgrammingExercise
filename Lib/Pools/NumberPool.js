var BasePool = require('./BasePool');
var searchAlgorithms = require('algorithms')
    .Search;
var sortingAlgorithms = require('algorithms')
    .Sorting;

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

        // configures array so that initialization is (n(n -1) / 2)
        var zero_in_range = (start_range <= 0 && end_range >= 0);
        var total_range = end_range - start_range + 1; // add the extra bit for the inclusive number
        total_range += (zero_in_range) ? -1 : 0;
        var new_pool = [];
        for(var i = 0; i < Math.floor(total_range / 1); i++) {
            var front_index = i;
            front_index += (zero_in_range && (start_range + i > 0)) ? -1 : 0;
            var front_value = start_range + i;
            var back_index = total_range - i - 1;
            back_index += (zero_in_range && (end_range - i < 0)) ? 1 : 0;
            var back_value = end_range - i;
            if(start_range + i !== 0) {
                new_pool[front_index] = front_value;
            }
            if(end_range - i !== 0) {
                new_pool[back_index] = back_value;
            }
        }
        this.setPool(new_pool);
        // sorting is not performed on the array because it assumes that the 
        // creation of the array made it already sorted. Otherwise sortPool 
        // would be called.
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
    /**
     * [allocate 
     * The Allocate method picks an available value from the pool, removes it 
     * from the pool, and returns this value to the caller. If the pool of 
     * available numbers is empty, the Allocate method returns 0. ]
     * @return {[Number]} [Returns an arbitrarily selected number from the pool.]
     */
    NumberPool.prototype.allocate = function allocate() {
        var pool = this.getPool();
        var value_to_return = 0;
        if(pool.length != 0) {
            value_to_return = pool.shift(); // no selection method was specified
        }

        return value_to_return;
    };

    /**
     * [release 
     * The Release method adds an available number value back to the pool. If 
     * the value is successfully added back to the pool, Release returns true.
     * If the value is already in the pool, then false is returned. ]
     * @param  {[Number]} x [ The value to release. ]
     * @return {[bool]}   [ If the value was successfully released. ]
     */
    NumberPool.prototype.release = function release(x) {
        var operation_successful = true;
        if(x === 0) {
            throw new RangeError('Cannot release "0" as that value is not allowed to exist in the NumberPool class, due to the allocate function\'s expected return values');
        }
        if(!_.isNumber(x) || x % 1 != 0) {
            throw new Error('The x parameter for the release function must be of a Number type, more specifically it must be a whole integer. Please fix this and try again.\nX Parameter: ' + x);
        }

        var value_in_pool = this.searchPool(this.getPool(), x);
        if(!value_in_pool) {
            this.getPool()
                .push(x);
        }
        else {
            operation_successful = false;
        }
        // This sorts the array in order to guarantee that the next time a release
        // or mutation is performed that it can access the element's location via
        // binary search in O(logn) time.
        this.sortPool(this.getPool());

        return operation_successful;
    };
    NumberPool.prototype.setPool = function setPool(new_pool) {
        BasePool.prototype.setPool.call(this, new_pool);
    };
    NumberPool.prototype.getPool = function getPool() {
        return BasePool.prototype.getPool.call(this);
    };
    NumberPool.prototype.searchPool = function searchPool(pool_to_search, object_to_search_for) {
        // Checks if the pool already has it, assumes it is already
        if(searchAlgorithms.binarySearch(pool_to_search, object_to_search_for) != -1) {
            return true;
        }
        else {
            return false;
        }
    };
    NumberPool.prototype.sortPool = function sortPool(pool_to_sort) {
        sortingAlgorithms.quicksort(pool_to_sort);
    };
    NumberPool.prototype.getType = function getType() {
        return 'NumberPool';
    };

    return NumberPool;
})();
