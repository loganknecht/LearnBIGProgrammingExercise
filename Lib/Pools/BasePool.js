var debugTools = require('../DebugTools/DebugTools');
var _ = require('lodash');

module.exports = (function() {
    function BasePool() {
        this.initialize();
    }
    BasePool.prototype = {};
    BasePool.prototype.constructor = BasePool;
    BasePool.prototype.initialize = function initialize() {
        this.setPool([]);
    };
    BasePool.prototype.allocate = function allocate() {
        throw Error(this.getType() + ' has extended the "BasePool" class without overriding the "allocate" function. Please assign this function correctly in the new sub-class "' + this.getType() + '".');
    };
    BasePool.prototype.release = function release(x) {
        throw Error(this.getType() + ' has extended the "BasePool" class without overriding the "release" function. Please assign this function correctly in the new sub-class "' + this.getType() + '".');
    };
    BasePool.prototype.setPool = function setPool(new_pool) {
        if(!_.isArray(new_pool)) {
            throw new TypeError('Set pool can only accept arrays.');
        }
        this.pool = new_pool;
    };
    BasePool.prototype.getPool = function getPool() {
        return this.pool;
    };
    BasePool.prototype.searchPool = function searchPool(object_to_search_for) {
        throw Error(this.getType() + ' has extended the "BasePool" class without overriding the "searchPool" function. Please assign this function correctly in the new sub-class "' + this.getType() + '".');
    };
    BasePool.prototype.sortPool = function sortPool(pool_to_sort) {
        throw Error(this.getType() + ' has extended the "BasePool" class without overriding the "sortPool" function. Please assign this function correctly in the new sub-class "' + this.getType() + '".');
    };
    BasePool.prototype.getType = function getType() {
        return 'BasePool';
    };
    BasePool.prototype.printDebug = function printDebug() {
        debugTools.printPrototypeChain(this);
    };

    return BasePool;
})();
