var Quicksort = require('../src/optimized-quicksort.js');

var array = [20, 100, 3, 43, 12, 39, 73, 2, 45, 77, 1];

function compareFn(left, right){
	return left > right;
}

function pivotFn(array, left, right) {
	return array[left + ~~((right - left) / 2)];
}

console.log(Quicksort.sort(array, compareFn, pivotFn));

var startDate, stopDate, tempResult;
var loopNumber = 9999999;

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++) {
	tempResult = Quicksort.sort(array, compareFn, pivotFn);
}
stopDate = +new Date();
console.log("Quicksort time: " + (stopDate - startDate)  + "ms");