var Quicksort = require('../src/optimized-quicksort.js');

Quicksort.prototype.comparator = function (left, right) { 
	return left > right; 
};

console.log(Quicksort.sort([20, 100, 3, 43, 12, 39, 73, 2, 45, 77, 1]));

var startDate, stopDate, tempResult;
var loopNumber = 9999999;

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = Quicksort.sort([20, 100, 3, 43, 12, 39, 73, 2, 45, 77, 1]);
}
stopDate = +new Date();
console.log("Quicksort time: " + (stopDate - startDate)  + "ms");