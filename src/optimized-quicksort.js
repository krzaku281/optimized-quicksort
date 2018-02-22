"use strict";

module.exports = {
	sort: sort,
	comparator: comparator,
	pivot: pivot,
};

function sort(array) {
	function swap(i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	};

	function quicksort(left, right) {
		if (left < right) {
			var divider = pivot(array, left, right),
				leftCopy = left,
				rightCopy = right;
 
			do {
				while (comparator(array[leftCopy], divider)) {
					++leftCopy;
				}
				while (comparator(divider, array[rightCopy])) {
					--rightCopy;
				}
				if (leftCopy <= rightCopy) {
					swap(leftCopy, rightCopy);
					++leftCopy;
					--rightCopy;
				}
			} while (leftCopy <= rightCopy);
 
			quicksort(left, rightCopy);
			quicksort(leftCopy, right);
		}
	}
	quicksort(0, array.length - 1);
 
	return array;
};

function comparator(left, right) { 
	return left < right; 
};

function pivot(array, left, right) {
	return array[left + ~~((right - left) / 2)];
};