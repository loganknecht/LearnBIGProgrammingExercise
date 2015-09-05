var NumberPool = require('./NumberPool');
var numberPool = new NumberPool(1, 5);
console.log(numberPool.allocate());
console.log(numberPool.allocate());
console.log(numberPool.allocate());
console.log(numberPool.allocate());
console.log(numberPool.allocate());
//--------------
console.log(numberPool.release(1));
console.log(numberPool.release(2));
console.log(numberPool.release(3));
console.log(numberPool.release(4));
console.log(numberPool.release(5));
