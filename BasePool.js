// see here for more of the sub-object properties(i.e. allocate, release):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
// var BasePool = module.exports = {
//     allocate: function allocate() {
//         console.log('lol');
//     },
//     release: function release(x) {
//         console.log('butts');
//     }
// };
//-------------------------------------------------
// BasePool = Object.create(null, {
//     prototype: {
//         value: {},
//     },
//     allocate: {
//         value: function allocate() {
//             throw Error(this.type() + ' has extended the "BasePool" class without overriding the "allocate" function. Please assign this function correctly in the new sub-class "' + this.type() + '".');
//         },
//     },
//     release: {
//         value: function release(x) {
//             throw Error(this.type() + ' has extended the "BasePool" class without overriding the "allocate" function. Please assign this function correctly in the new sub-class "' + this.type() + '".');
//         }
//     },
//     type: {
//         value: function type() {
//             return "BasePool";
//         }
//     },
//     printDebug: {
//         value: function printDebug() {
//             console.log(this.type() + " prototype: " + JSON.stringify(this.prototype));
//         }
//     }
// });

// BasePool.prototype = {};

// module.exports = BasePool;
//-------------------------------------------------
module.exports = (function() {
    function BasePool() {
        // do nothing
    }

    BasePool.prototype = {};

    BasePool.prototype.initialize = function initialize() {
        throw Error(this.type() + ' has extended the "BasePool" class without overriding the "type" function. Please assign this function correctly in the new sub-class.');
    };
    BasePool.prototype.allocate = function allocate() {
        throw Error(this.type() + ' has extended the "BasePool" class without overriding the "allocate" function. Please assign this function correctly in the new sub-class "' + this.type() + '".');
    };
    BasePool.prototype.release = function release(x) {
        throw Error(this.type() + ' has extended the "BasePool" class without overriding the "allocate" function. Please assign this function correctly in the new sub-class "' + this.type() + '".');
    };
    BasePool.prototype.type = function type() {
        throw Error('A sub-object has extended the "BasePool" class without overriding the "type" function. Please assign this function correctly in the new sub-class.');
    };
    BasePool.prototype.printDebug = function printDebug() {
        console.log(this.type() + " prototype: " + JSON.stringify(this.prototype));
    };

    return BasePool;
})();
