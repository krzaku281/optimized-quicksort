var Quicksort = require('../src/optimized-quicksort.js');

function myCompareFn(a, b){
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

var array = [], copy;
for(var i = 0 ; i < 10000 ; i++){
	array.push(~~(Math.random()*10000))
}

var startDate, stopDate, tempResult;
var loopNumber = 1000;
console.log("Sort 1000 tables each 10000 integer elements");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++) {
	copy = array.slice(0);
	tempResult = Quicksort.sort(copy, myCompareFn);
}
stopDate = +new Date();
console.log("Quicksort time: " + (stopDate - startDate)  + "ms");



startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++) {
	copy = array.slice(0);
	tempResult = copy.sort(myCompareFn);
}
stopDate = +new Date();
console.log("Array.sort() time: " + (stopDate - startDate)  + "ms");




console.log("");
var smallArray = [], copy;
for(var i = 0 ; i < 10 ; i++){
	smallArray.push(~~(Math.random()*10))
}

var smallLoopNumber = 1000000;
console.log("Sort 1000000 tables each 10 integer elements");

startDate = +new Date();
for(var i = 0 ; i < smallLoopNumber ; i++) {
	copy = smallArray.slice(0);
	tempResult = Quicksort.sort(copy, myCompareFn);
}
stopDate = +new Date();
console.log("Quicksort time: " + (stopDate - startDate)  + "ms");



startDate = +new Date();
for(var i = 0 ; i < smallLoopNumber ; i++) {
	copy = smallArray.slice(0);
	tempResult = copy.sort(myCompareFn);
}
stopDate = +new Date();
console.log("Array.sort() time: " + (stopDate - startDate)  + "ms");


console.log("");
function makeWord() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var stringArray = [], copy;
for(var i = 0 ; i < 10000 ; i++){
	stringArray.push(makeWord())
}

var startDate, stopDate, tempResult;
var loopNumber = 100;
console.log("Sort 100 tables each 10000 string elements");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++) {
	copy = stringArray.slice(0);
	tempResult = Quicksort.sort(copy, myCompareFn);
}
stopDate = +new Date();
console.log("Quicksort time: " + (stopDate - startDate)  + "ms");



startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++) {
	copy = stringArray.slice(0);
	tempResult = copy.sort(myCompareFn);
}
stopDate = +new Date();
console.log("Array.sort() time: " + (stopDate - startDate)  + "ms");