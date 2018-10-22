# optimized-quicksort
Optimized version of quicksort. Dual-pivot implementation with insertion sort optimization.

[![npm version](https://badge.fury.io/js/optimized-quicksort.svg)](https://badge.fury.io/js/optimized-quicksort) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Installation
```sh
$ npm install optimized-quicksort
```

# Quick start
```sh
var Quicksort = require('optimized-quicksort');

function myCompareFn(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

var array = [1,9,2,8,3,7,4,6,5];
Quicksort.sort(array, myCompareFn);
```

# Performance
```sh
npm run performance

Sort 1000 tables each 10000 integer elements
Quicksort time: 730ms
Array.sort() time: 1940ms

Sort 1000000 tables each 10 integer elements
Quicksort time: 210ms
Array.sort() time: 654ms

Sort 100 tables each 10000 string elements
Quicksort time: 320ms
Array.sort() time: 400ms
```

# Licence
MIT
