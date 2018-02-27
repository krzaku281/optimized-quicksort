"use strict";

module.exports = {
	sort: sort,
};

function sort(array, low, high, comparatorFn) {
    if (high <= low) {
		return;
	}
      
    var pivot1 = array[low];
    var pivot2 = array[high];
       
    if (pivot1 > pivot2) {
        swap(array, low, high);
        pivot1 = array[low];
        pivot2 = array[high];
    }
    else if (pivot1 === pivot2) {
        while (pivot1 === pivot2 && low < high) {
            ++low;
            pivot1 = array[low];
        }
    }
      
    var i = low+1;
    var lt = low+1;
    var gt = high-1;
      
    while (i <= gt) {          
        if (comparatorFn(array[i], pivot1)) {
            swap(array, i++, lt++);
        }
        else if (comparatorFn(pivot2, array[i])) {
            swap(array, i, gt--);
        }
        else {
            ++i;
        }  
    }
    swap(array, low, --lt);
    swap(array, high, ++gt);
      
    sort(array, low, lt-1, comparatorFn);
    sort (array, lt+1, gt-1, comparatorFn);
    sort(array, gt+1, high, comparatorFn);
	  
	return array;
};

function swap(array, less, more) {
	var temp = array[less];
	array[less] = array[more];
	array[more] = temp;
}