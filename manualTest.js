var NumberPool = require('./NumberPool');
var numberPool = new NumberPool(1, 5);
console.log(numberPool.allocate());
console.log(numberPool.allocate());
console.log(numberPool.allocate());
console.log(numberPool.allocate());
console.log(numberPool.allocate());
console.log(numberPool.allocate());
