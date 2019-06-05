// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example:
// Input: "III"
// Output: 3


// Brute-force
    // Create object storing the symbol-value system, symbols as keys and values as values.
    // Create counter variable.
    // Convert roman string to array, splitting at "".
    // Iterate over array
    // If at last element, increment that element.
    // Else,
        // If current number is greater or equal to the next number,
            // increment counter variable by the value of that symbol.
        // else, decrement by that value.
    // Return counter variable.

var romanToInt = function(roman) {
    const romanSystem = {
        I:1, V:5, X:10, L:50, C:100, D:500, M:1000
    };

    const romanArr = roman.split("");

    let counter = 0;
    for(let i = 0;i < romanArr.length;i++) {
        let value = romanSystem[romanArr[i]];
        let nextValue = romanSystem[romanArr[i + 1]];

        if (i === romanArr.length-1) {
            counter += value;
        } else {
            if (value >= nextValue) {
                counter += value;
            } else {
                counter -= value;
            }
        }
    }

    return counter;
};

// Recursively
    // Base-case: if roman is length of 1, return the value of that symbol.

    // Recursive-case:
    // If current value is equal or greater than the following value,
        // return that value plus the return value of another romanToInt call (with the first char dropped)
    // Else,
        // return the negstive of that value plus the return value of another romanToInt call (with the first char dropped)
       
var romanToInt = function (roman) { 
    const romanSystem = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    if (roman.length === 1) return romanSystem[roman[0]];

    if (romanSystem[roman[0]] >= romanSystem[roman[1]]) {
        return romanSystem[roman[0]] + romanToInt(roman.slice(1, roman.length));
    } else {
        return -romanSystem[roman[0]] + romanToInt(roman.slice(1, roman.length));
    }
};