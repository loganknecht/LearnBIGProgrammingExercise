var debugTools = require('./DebugTools');
module.exports = (function() {
    function BasePool() {
        // do nothing
    }
    BasePool.prototype = {};
    BasePool.prototype.initialize = function initialize() {
        throw Error(this.getType() + ' has extended the "BasePool" class without overriding the "getType" function. Please assign this function correctly in the new sub-class.');
    };
    BasePool.prototype.allocate = function allocate() {
        throw Error(this.getType() + ' has extended the "BasePool" class without overriding the "allocate" function. Please assign this function correctly in the new sub-class "' + this.getType() + '".');
    };
    BasePool.prototype.release = function release(x) {
        throw Error(this.getType() + ' has extended the "BasePool" class without overriding the "allocate" function. Please assign this function correctly in the new sub-class "' + this.getType() + '".');
    };
    BasePool.prototype.getType = function getType() {
        return "BasePool";
    };
    BasePool.prototype.printDebug = function printDebug() {
        debugTools.printPrototypeChain(this);
    };

    return BasePool;
})();
