// Given an integer array nums,
// find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
//
// Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    let greatestSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        currentSum = Math.max(num, currentSum + num)
        greatestSum = Math.max(currentSum, greatestSum)
    };

    return greatestSum;
};
