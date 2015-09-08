var assert = require("chai")
    .assert;
var NumberPool = require("../Lib/Pools/NumberPool");

describe('NumberPool', function() {
    context('on creation', function() {
        // Initialized once for faster test coverage
        var numberPool = new NumberPool(1, 10000000);
        describe('#constructor', function() {
            it('should only accept number for first parameter', function() {
                assert.throws(function() {
                    numberPool.initialize('lol', 0);
                }, TypeError);
                assert.throws(function() {
                    numberPool.initialize([], 0);
                }, TypeError);
                assert.throws(function() {
                    numberPool.initialize(function() {}, 0);
                }, TypeError);
                assert.throws(function() {
                    numberPool.initialize({}, 0);
                }, TypeError);
                assert.doesNotThrow(function() {
                    numberPool.initialize(0, 0);
                });
            });
            it('should only accept number for second parameter', function() {
                assert.throws(function() {
                    numberPool.initialize(0, 'lol');
                }, TypeError);
                assert.throws(function() {
                    numberPool.initialize(0, []);
                }, TypeError);
                assert.throws(function() {
                    numberPool.initialize(0, function() {});
                }, TypeError);

                assert.throws(function() {
                    numberPool.initialize({}, 0);
                }, TypeError);
                assert.doesNotThrow(function() {
                    numberPool.initialize(0, 0);
                });
            });
        });
        describe('#allocate()', function() {
            it('should throw an error', function() {
                assert.throws(numberPool.allocate, Error);
            });
        });
        describe('#release()', function() {
            it('should only accept type of Number', function() {
                assert.throws(function() {
                    numberPool.release('b4d1npu7');
                }, Error);
                assert.throws(function() {
                    numberPool.release([]);
                }, Error);
                assert.throws(function() {
                    numberPool.release(function() {
                        return 0;
                    });
                }, Error);
                assert.doesNotThrow(function() {
                    numberPool.release(3);
                }, Error);
            });
            it('should throw an error for parameter == 0', function() {
                assert.throws(function() {
                    numberPool.release(0);
                }, RangeError);
            });
        });
        describe('#setPool()', function() {
            it('should only accept an array', function() {
                assert.throws(function() {
                    numberPool.setPool(1);
                }, TypeError);
                assert.throws(function() {
                    numberPool.setPool('Ignore me!~');
                }, TypeError);
                assert.throws(function() {
                    numberPool.setPool(function() {
                        return 0;
                    });
                }, TypeError);
                //-------------------------------------
                numberPool.setPool([1, 2, 3]);
                assert.lengthOf(numberPool.pool, 3, 'it should be a length of 3');
                // sets it up for the get pool tests
                numberPool.setPool([]);
                assert.lengthOf(numberPool.pool, 0, 'it should be a length of 0');
            });
        });
        describe('#getPool()', function() {
            // before(function() {
            // });
            it('is an array', function() {
                assert.isArray(numberPool.getPool());
            });
            it('is empty', function() {
                numberPool.initialize(1, 10000000);
                assert.lengthOf(numberPool.getPool(), 10000000);
            });
        });
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
        //         numberPool.searchPool(function() { return 0; });
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
        //         numberPool.searchPool(function() { return 0; });
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
