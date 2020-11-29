// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2, 2]


// Example 2:
// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [4, 9]

var numCountMap = function (nums) {
    const countMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (countMap[nums[i]]) {
            countMap[nums[i]] += 1;
        } else {
            countMap[nums[i]] = 1;
        }
    }
    return countMap;
};

var intersect = function (nums1, nums2) {
    //     We create counters for each array;
    const nums1CountMap = numCountMap(nums1);
    const nums2CountMap = numCountMap(nums2);

    const intersect = [];
    //     Since we are checking one map against another,
    //     we arbitrarily choose a map and iterate over each property (number).
    for (const num in nums1CountMap) {
        //         We then pull the count for each number;
        const num1Count = nums1CountMap[num];
        const num2Count = nums2CountMap[num];
        //          If a number that is found in nums1 is not found in nums2,
        //          nums2Count will be a falsey value ('undefined'), 
        //          and we do not include as part of the intersect.
        if (num2Count) {
            const count = num1Count > num2Count ? num2Count : num1Count;
            //              If the number is present in both 1 and 2, 
            //              then the interesect is the lesser of the two counts.
            //              So, we include the number as part of the intersect that many times. 
            for (let i = 0; i < count; i++) intersect.push(num);
        }
    }

    return intersect;
};