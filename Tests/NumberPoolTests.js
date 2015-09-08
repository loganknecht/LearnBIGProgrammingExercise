var assert = require("chai")
    .assert;
var NumberPool = require("../Lib/Pools/NumberPool");

describe('NumberPool', function() {
    context('on creation', function() {
        // Initialized once for faster test coverage
        var numberPool = new NumberPool(1, 10);
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
            before(function() {
                numberPool.initialize(1, 3);
            });
            it('should return the correct allocate values', function() {
                assert.strictEqual(numberPool.allocate(), 1);
                assert.strictEqual(numberPool.allocate(), 2);
                assert.strictEqual(numberPool.allocate(), 3);
            });
            it('should return 0 when empty', function() {
                assert.strictEqual(numberPool.allocate(), 0);
                assert.strictEqual(numberPool.allocate(), 0);
                assert.strictEqual(numberPool.allocate(), 0);
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
            it('is an array', function() {
                assert.isArray(numberPool.getPool());
            });
        });
        describe('#searchPool()', function() {
            it('should be tested by its own library.', function() {
                // Searching shouldn't really be tested as this relies on an external
                // library and they should be responsible for their testing
            });
        });
        describe('#sortPool()', function() {
            it('should be tested by its own library.', function() {
                // Sorting shouldn't really be tested as this relies on an external
                // library and they should be responsible for their testing
            });
        });
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
