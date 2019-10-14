// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.



//     Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
//     Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
//     Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".


//     Constraints:

// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'

var balancedStringSplit = function (string) {

    let rCount = 0;
    let lCount = 0;
    let pairCount = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char === 'R') {
            rCount += 1;
        } else {
            lCount += 1;
        }

        if (rCount === lCount) {
            pairCount += 1;
            rCount = 0;
            lCount = 0
        }
    }

    return pairCount
};