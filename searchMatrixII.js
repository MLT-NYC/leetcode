// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:
// Input: matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5
// Output: true

// Example 2:
// Input: matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 20
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// - 109 <= matrix[i][j] <= 109
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// - 109 <= target <= 109

var searchMatrix = function (matrix, target) {
    //  Going upward would get us smaller numbers, while going rightward would get us larger numbers. Starting at a median point allows for grid-traversal in one of two directions to eventually find the target. As we traverse in one direction or the other, we logically disregard entire rows and columns--increasing the time efficiency of the search operation.
    //  Determine the bottom-left position of the grid and start there, since that cell (or the top-right) contains a median figure, based on the hortizontal and vertical sorting of the grid.
    let row = matrix.length - 1;
    let col = 0;
    
    while (row >= 0 && col < matrix[0].length) {
        let currCell = matrix[row][col];
        if (currCell > target) { // If the current cell is greater than the target, we should go upward to find the target.
            row--;
        } else if (currCell < target) { // If the current cell is smaller than the target, we should go rightward to find the target.
            col++;
        } else { // If the cell is neither greater nor smaller than the target, we must have found the target!
            return true;
        }
    }
    //  If we are able to traverse the grid without finding the target, it must not be present.    
    return false;
};