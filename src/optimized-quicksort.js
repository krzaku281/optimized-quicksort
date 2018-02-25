"use strict";

module.exports = {
	sort: sort,
	comparator: comparator,
	pivot: pivot,
};

function sort(array) {
	if (array.length < 2) {
		return array;
	}

	function quicksort(left, right) {
		if (left < right) {
			var divider = pivot(array, left, right);
			var	less = left;
			var	more = right;
 
			do {
				while (comparator(array[less], divider)) {
					++less;
				}
				while (comparator(divider, array[more])) {
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

function comparator(left, right) { 
	return left < right; 
};

function pivot(array, left, right) {
	return array[left + ~~((right - left) / 2)];
};