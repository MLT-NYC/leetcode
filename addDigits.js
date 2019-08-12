// Given a non - negative integer num, repeatedly add all its digits until the result has only one digit.

//     Example:

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
// Since 2 has only one digit, return it.

var addDigits = function (num) {
    let numArr = num.toString().split('');
    if (numArr.length === 1) return num;

    let reducedNum = 0;
    numArr.forEach(val => {
        reducedNum += parseInt(val);
    });

    return addDigits(reducedNum);
};