var assert = require("chai")
    .assert;
var NumberPool = require("../Lib/Pools/NumberPool");

describe('NumberPool', function() {
    context('on creation', function() {
        var numberPool;
        beforeEach(function() {
            // Fresh object every time
            numberPool = new NumberPool(1, 10000000);
        });
        describe('#constructor', function() {
            it('should only accept number for first parameter', function() {
                assert.doesNotThrow(function() {
                    numberPool = new NumberPool(0, 0);
                });
                assert.throws(function() {
                    numberPool = new NumberPool('lol', 0);
                }, TypeError);
                assert.throws(function() {
                    numberPool = new NumberPool([], 0);
                }, TypeError);
                assert.throws(function() {
                    numberPool = new NumberPool(function() {}, 0);
                }, TypeError);
            });
        });
        // describe('#allocate()', function() {
        // it('should only throw an error', function() {
        //     assert.throws(function() {
        //         numberPool.allocate();
        //     }, Error);
        // });
        // });
        // describe('#release()', function() {
        // it('should only throw an error', function() {
        //     assert.throws(function() {
        //         numberPool.release(0);
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.release('lol');
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.release([]);
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.release(function() {});
        //     }, Error);
        // });
        // });
        // describe('#setPool()', function() {
        // it('should only accept an array', function() {
        //     numberPool.setPool([1, 2, 3]);
        //     assert.lengthOf(numberPool.pool, 3, 'it should be a length of 3');
        //     assert.throws(function() {
        //         numberPool.setPool(1);
        //     }, TypeError);
        //     assert.throws(function() {
        //         numberPool.setPool('Ignore me!~');
        //     }, TypeError);
        //     assert.throws(function() {
        //         numberPool.setPool(function() {});
        //     }, TypeError);
        // });
        // });
        // describe('#getPool()', function() {
        //     it('is an array', function() {
        //         assert.isArray(numberPool.getPool());
        //     });
        //     it('is empty', function() {
        //         assert.lengthOf(numberPool.getPool(), 0);
        //     });
        // });
        // describe('#searchPool()', function() {
        // it('only throws an error', function() {
        //     assert.throws(function() {
        //         numberPool.searchPool(0);
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.searchPool('lol');
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.searchPool([]);
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.searchPool(function() {});
        //     }, Error);
        // });
        // });
        // describe('#sortPool()', function() {
        // it('only throws an error', function() {
        //     assert.throws(function() {
        //         numberPool.searchPool(0);
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.searchPool('lol');
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.searchPool([]);
        //     }, Error);
        //     assert.throws(function() {
        //         numberPool.searchPool(function() {});
        //     }, Error);
        // });
        // });
        describe('#getType()', function() {
            it('is a string', function() {
                assert.isString(numberPool.getType(), 'is string');
            });
            it('is the string "NumberPool"', function() {
                assert.strictEqual(numberPool.getType(), 'NumberPool', 'must be NumberPool');
            });
        });
    });
});
