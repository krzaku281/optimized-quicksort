"use strict";

module.exports = {
	sort: sort,
};

function sort(array, comparatorFn, pivotFn) {
	if (array.length < 2) {
		return array;
	}
	
	comparatorFn = comparatorFn || baseComparatorFn;
	pivotFn = pivotFn || basePivotFn;

	function quicksort(left, right) {
		if (left < right) {
			var divider = pivotFn(array, left, right);
			var	less = left;
			var	more = right;
 
			do {
				while (comparatorFn(array[less], divider)) {
					++less;
				}
				while (comparatorFn(divider, array[more])) {
					--more;
				}
				
				if (less <= more) {
					var temp = array[less];
					array[less] = array[more];
					array[more] = temp;
					
					++less;
					--more;
				}
			} while (less <= more);
 
			quicksort(left, more);
			quicksort(less, right);
		}
	};
	
	quicksort(0, array.length - 1);
 
	return array;
};

function baseComparatorFn(left, right) { 
	return left < right; 
};

function basePivotFn(array, left, right) {
	return array[left + ~~((right - left) / 2)];
};