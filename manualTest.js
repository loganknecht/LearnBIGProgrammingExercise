var NumberPool = require('./Lib/Pools/NumberPool');
var numberPool = new NumberPool(1, 10000);
console.log("----------------------------------------------");
console.log("Performing manual Text Execution of NumberPool")
console.log("----------------------------------------------");
var allocationOne = numberPool.allocate();
var allocationTwo = numberPool.allocate();
var allocationThree = numberPool.allocate();
var allocationFour = numberPool.allocate();
var allocationFive = numberPool.allocate();
console.log(allocationOne);
console.log(allocationTwo);
console.log(allocationThree);
console.log(allocationFour);
console.log(allocationFive);
//---------------------------------
console.log(numberPool.release(allocationOne));
console.log(numberPool.release(allocationTwo));
console.log(numberPool.release(allocationThree));
console.log(numberPool.release(allocationFour));
console.log(numberPool.release(allocationFive));
