// Given a binary array, find the maximum number of consecutive 1s in this array.
//
// Example:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation:
//  The first two digits or the last three digits are consecutive 1s.
//  The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for(let i = 0; i < nums.length; i++) {
        nums[i] > 0 ?currentCount += 1 : currentCount = 0;
        if (currentCount > maxCount) maxCount = currentCount;
    }

    return maxCount;
};
