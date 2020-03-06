// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.


var plusOne = function(digits) {
    const lastDigit = digits[digits.length-1]
    const allExceptLast = digits.slice(0, digits.length-1);
    
    if (digits.length < 2) {
        if (lastDigit < 9) {
            return [lastDigit + 1]
        } else {
            return [1, 0];
        }
    }
    
    if (lastDigit < 9) return [...allExceptLast, lastDigit + 1];
    
    return [...plusOne(digits.slice(0, digits.length-1)), 0]
};
