// Given an array nums and a value val, remove all instances of that value in -place 
// and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in -place with O(1) extra memory.

// The order of elements can be changed.
// It doesn't matter what you leave beyond the new length.

var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i = i - 1;
        }
    }

    return nums.length;
};