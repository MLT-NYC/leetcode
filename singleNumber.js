// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
//     Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
//     Example 1:
//
// Input: [2,2,1]
// Output: 1
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
    const numsCounter = {};
    nums.forEach(num => numsCounter[num] ? numsCounter[num] += 1 : numsCounter[num] = 1);
    for ([key, value] of Object.entries(numsCounter)) if (value < 2) return key;
};
