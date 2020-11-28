// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number could represent.
// Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. 
// Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

var letterCombinations = function (digits) {
    const letterMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    // We create two arrays; 
    // the first, 'combinations', in order to track and return all created combinations,
    let combinations = [];
    // the second, 'tempCombinations', in order to track and push new combinations based off of 'combinations' into 'combinations'
    let tempCombinations = [];

    // We then iterate over every digit, grabbing from the map the corresponding letters.
    for (let i = 0; i < digits.length; i++) {
        const currDigit = digits[i];
        const letters = letterMap[currDigit];

        //  If there are no combinations,
        //  then the first combination of letters is the first set of combinations to consider.
        if (!combinations.length) {
            combinations = [...letters];
            continue;
        }

        // Otherwise, if there are already existing combinations,
        // we iterate over every letter of the current letters to begin creating new combinations.
        for (let j = 0; j < letters.length; j++) {
            const letter = letters[j];

            // For every letter, we iterate over every combination: 
            // we create a new combination (a concatenation of the every combination plus the current letter),
            // and push it into array 'tempCombinations'.
            for (let k = 0; k < combinations.length; k++) {
                const combination = combinations[k];
                tempCombinations.push(combination + letter);
            }
        }

        // Once we have created new combinations ('tempCombinations'),
        // based on the previous combinations and the current array of letters,
        // we set combinations to be equal to the new combinations.
        combinations = tempCombinations;
        // We then reassign the variable responsible for tracking the new combinations to an empty array
        // for the next iteration of digits.
        tempCombinations = [];
    }


    return combinations;
};