// Given an array of numbers nums,
// in which exactly two elements appear only once and all the other elements appear exactly twice.
// Find the two elements that appear only once.
//
//     Example:
//
// Input:  [1,2,1,3,2,5]
// Output: [3,5]

var singleNumber = function(nums) {
    const numsCounter = {};
    nums.forEach(num => numsCounter[num] ? numsCounter[num] += 1 : numsCounter[num] = 1);
    let singleNums = [];
    for ([key, value] of Object.entries(numsCounter)) if (value < 2) singleNums.push(key);
    return singleNums;
};
