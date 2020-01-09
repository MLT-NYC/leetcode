// Given a non - negative index k where k ≤ 33, 
// return the kth index row of the Pascal's triangle.
// Note that the row index starts from 0.

// In Pascal's triangle, 
// each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1, 3, 3, 1]

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
        let prevRow = triangle[i - 1];
        triangle.push(nextRow(prevRow));
    }

    return triangle;
};

var getRow = function (rowIndex) {
    const triangle = generate(rowIndex + 1);
    return triangle[rowIndex];
};
