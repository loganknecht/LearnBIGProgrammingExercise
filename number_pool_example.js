var NumberPool = require('./Lib/Pools/NumberPool');
var numberPool = new NumberPool(1, 10000);
console.log('----------------------------------------------');
console.log('Performing manual Text Execution of NumberPool')
console.log('----------------------------------------------');
console.log('Start Pool Size: ' + numberPool.getPool()
    .length);
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
console.log('Middle Pool Size: ' + numberPool.getPool()
    .length);
//---------------------------------
console.log(numberPool.release(allocationOne));
console.log(numberPool.release(allocationTwo));
console.log(numberPool.release(allocationThree));
console.log(numberPool.release(allocationFour));
console.log(numberPool.release(allocationFive));
//---------------------------------
console.log('Final Pool Size: ' + numberPool.getPool()
    .length);
