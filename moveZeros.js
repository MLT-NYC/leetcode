// Given an array nums, write a function to move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.

// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function (nums) {
    let numZeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[numZeroes] = nums[i];
            numZeroes += 1;
        }
    }

    while (numZeroes < nums.length) {
        nums[numZeroes] = 0;
        numZeroes += 1;
    }
}
