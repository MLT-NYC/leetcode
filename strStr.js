// Implement strStr().

// Return the index of the first occurrence of needle in haystack, 
// or - 1 if needle is not part of haystack.

// Brute-force
var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0;

    let i1 = 0;
    let i2 = needle.length;

    while (i2 <= haystack.length) {
        if (haystack.slice(i1, i2) === needle) return i1;

        i1++
        i2++
    }

    return -1;
};