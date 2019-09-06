// Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
// return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
// Example:
//
// Input: "Hello World"
// Output: 5

var lengthOfLastWord = function(s) {
    if (s.length === 0) return 0;

    const string  = s.trim();
    const words  = string.split(' ');
    const lastWord = words[words.length-1];

    return lastWord.length;
}