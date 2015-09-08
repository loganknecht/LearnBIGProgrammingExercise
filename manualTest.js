var NumberPool = require('./Lib/Pools/NumberPool');
// var numberPool = new NumberPool(1, 10000);
var numberPool = new NumberPool(-5, 5);
console.log(numberPool.getPool());
numberPool.initialize(-5, 1);
console.log(numberPool.getPool());
numberPool.initialize(-10, -1);
console.log(numberPool.getPool());
numberPool.initialize(-10, 0);
console.log(numberPool.getPool());
numberPool.initialize(-1, 0);
console.log(numberPool.getPool());
numberPool.initialize(0, 0);
console.log(numberPool.getPool());
numberPool.initialize(0, 1);
console.log(numberPool.getPool());
numberPool.initialize(1, 10);
console.log(numberPool.getPool());
numberPool.initialize(0, 10);
console.log(numberPool.getPool());
// console.log("----------------------------------------------");
// console.log("----------------------------------------------");
// console.log("Performing manual Text Execution of NumberPool")
// console.log("----------------------------------------------");
// var allocationOne = numberPool.allocate();
// var allocationTwo = numberPool.allocate();
// var allocationThree = numberPool.allocate();
// var allocationFour = numberPool.allocate();
// var allocationFive = numberPool.allocate();
// console.log(allocationOne);
// console.log(allocationTwo);
// console.log(allocationThree);
// console.log(allocationFour);
// console.log(allocationFive);
// //---------------------------------
// console.log(numberPool.release(allocationOne));
// console.log(numberPool.release(allocationTwo));
// console.log(numberPool.release(allocationThree));
// console.log(numberPool.release(allocationFour));
// console.log(numberPool.release(allocationFive));
