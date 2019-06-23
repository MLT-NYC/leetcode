// Given an array nums, write a function to move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.

// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function (nums) {
    let zeros = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            zeros += 1;

            i = i - 1;
        }
    }

    for (let i = 0; i < zeros; i++) {
        nums.push(0);
    }

    return nums;
};