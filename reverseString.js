// Write a function that reverses a string.
// The input string is given as an array of characters char[].

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in -place with O(1) extra memory.

var reverseString = function (str, start = 0, end = str.length - 1) {
    if (start > end) return;

    [str[start], str[end]] = [str[end], str[start]]

    reverseString(str, start + 1, end - 1);
};