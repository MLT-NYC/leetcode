// Given a non - negative integer numRows, 
// generate the first numRows of Pascal's triangle.

// In Pascal's triangle, 
// each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

var nextRow = function (row) {
    if (row.length === 1) return [1, 1];

    let nextRow = [];
    for (let i = 1; i < row.length; i++) {
        let prevInt = row[i - 1];
        let currInt = row[i];
        nextRow.push(prevInt + currInt);
    }

    return [1, ...nextRow, 1];
};

var generate = function (numRows) {
    if (numRows < 1) return [];

    let triangle = [[1]];
    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1]
        triangle.push(nextRow(prevRow))
    }

    return triangle;
};