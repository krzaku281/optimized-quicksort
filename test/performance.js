var Quicksort = require('../src/optimized-quicksort.js');

function myCompareFn(left, right){
	return left < right;
}

function myPivotFn(array, left, right) {
	return array[left + ~~((right - left) / 2)];
}

console.log("Result: " + Quicksort.sort([5,8,1,10,2,3,9,7,6,2,2,2,2,2], 0, 13, myCompareFn));

var startDate, stopDate, tempResult;
var loopNumber = 9999999;

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++) {
	tempResult = Quicksort.sort([5,8,1,10,2,3,9,7,6,2,2,2,2,2], 0, 13, myCompareFn);
}
stopDate = +new Date();
console.log("Quicksort time: " + (stopDate - startDate)  + "ms");



startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++) {
	tempResult = [5,8,1,10,2,3,9,7,6,2,2,2,2,2].sort(myCompareFn);
}
stopDate = +new Date();
console.log("Array.sort() time: " + (stopDate - startDate)  + "ms");