// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.

// Brute-force, converting to string

var isPalindrome = function(num) {
    const numStr = num.toString();
    const revNumStr = num.toString().split("").reverse().join("");

    return numStr === revNumStr;
};