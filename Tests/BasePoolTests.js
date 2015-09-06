var assert = require("chai")
    .assert;
// var expect = require("expect");
var BasePool = require("../Lib/Pools/BasePool");

describe('BasePool', function() {
    context('on creation', function() {
        var basePool;
        beforeEach(function() {
            // Fresh object every time
            basePool = new BasePool();
        });
        describe('#allocate()', function() {
            it('should only throw an error', function() {
                assert.throws(function() {
                    basePool.allocate();
                }, Error);
            });
        });
        describe('#release()', function() {
            it('should only throw an error', function() {
                assert.throws(function() {
                    basePool.release(0);
                }, Error);
                assert.throws(function() {
                    basePool.release('lol');
                }, Error);
                assert.throws(function() {
                    basePool.release([]);
                }, Error);
                assert.throws(function() {
                    basePool.release(function() {});
                }, Error);
            });
        });
        describe('#setPool()', function() {
            it('should only accept an array', function() {
                basePool.setPool([1, 2, 3]);
                assert.lengthOf(basePool.pool, 3, 'it should be a length of 3');
                assert.throws(function() {
                    basePool.setPool(1);
                }, TypeError);
                assert.throws(function() {
                    basePool.setPool('Ignore me!~');
                }, TypeError);
                assert.throws(function() {
                    basePool.setPool(function() {});
                }, TypeError);
            });
        });
        describe('#getPool()', function() {
            it('is an array', function() {
                assert.isArray(basePool.getPool());
            });
            it('is an empty array', function() {
                assert.lengthOf(basePool.getPool(), 0);
            });
        });
        describe('#searchPool()', function() {
            it('only throws an error', function() {
                assert.throws(function() {
                    basePool.searchPool(0);
                }, Error);
                assert.throws(function() {
                    basePool.searchPool('lol');
                }, Error);
                assert.throws(function() {
                    basePool.searchPool([]);
                }, Error);
                assert.throws(function() {
                    basePool.searchPool(function() {});
                }, Error);
            });
        });
        describe('#sortPool()', function() {
            it('only throws an error', function() {
                assert.throws(function() {
                    basePool.searchPool(0);
                }, Error);
                assert.throws(function() {
                    basePool.searchPool('lol');
                }, Error);
                assert.throws(function() {
                    basePool.searchPool([]);
                }, Error);
                assert.throws(function() {
                    basePool.searchPool(function() {});
                }, Error);
            });
        });
        describe('#getType()', function() {
            it('is only a string', function() {
                assert.isString(basePool.getType(), 'is string');
            });
            it('is BasePool', function() {
                assert.strictEqual(basePool.getType(), 'BasePool', 'must be BasePool');
            });
        });
    });
});
