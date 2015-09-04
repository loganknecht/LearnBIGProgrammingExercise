// class NumberPool {
//     public:
//     NumberPool();
//     ~NumberPool();
//     int Allocate();
//     bool Release(int x);
// };

// NumberPool::NumberPool() {
// Add your own code here
// };

// NumberPool::~NumberPool() {
// Add your own code here
// }

// int NumberPool::Allocate() {
// Add your own code here
// The Allocate method picks an available value from the pool, removes it
// from the pool, and returns this value to the caller.If the pool of 
// available numbers is empty, the Allocate method returns 0.
// }

// bool NumberPool::Release(int x) {
// Add your own code here
// The Release method adds an available number value back to the pool. If 
// the value is successfully added back to the pool, Release returns true.
// If the value is already in the pool, then false is returned.
// }

// TODO: provide naming syntax clarity. snake_style for vars, camelCase for methods, and pascalCase for classes
// BasePool = require('./BasePool');

// function allocate() {
//     console.log('sad');
// }

// function release() {
//     console.log('panda');
// }

BasePool = require('./BasePool');

module.exports = (function() {
    function NumberPool() {
        // Call to super
        BasePool.constructor.call(this);
    }
    NumberPool.prototype = new BasePool();
    NumberPool.prototype.initialize = function initialize() {
        BasePool.initialize.call(this);
    }
    NumberPool.prototype.allocate = function allocate() {
        BasePool.allocate.call(this);
    }
    NumberPool.prototype.release = function release() {
        BasePool.release.call(this);
    }
    NumberPool.prototype.getType = function getType() {
        return "NumberPool";
    };

    return NumberPool;
})();
