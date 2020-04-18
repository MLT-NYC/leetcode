// Brute-force recursion
var uniquePaths = (cols, rows, pos = [0, 0]) => {
    let total = 0;

    if (pos[0] === cols - 1 && pos[1] === rows - 1) {
        return 1;
    }

    if (pos[0] < cols - 1 && pos[1] < rows - 1) {
        total += uniquePaths(cols, rows, [pos[0] + 1, pos[1]])
        total += uniquePaths(cols, rows, [pos[0], pos[1] + 1])
    } else if (pos[0] === cols - 1) {
        total += uniquePaths(cols, rows, [pos[0], pos[1] + 1])
    } else {
        total += uniquePaths(cols, rows, [pos[0] + 1, pos[1]])
    }

    return total
};

// Memoized
var uniquePaths = (cols, rows, pos = [0, 0], memo = {}) => {
    let total = 0;

    if (pos in memo) return memo[pos];

    if (pos[0] === cols - 1 && pos[1] === rows - 1) {
        return 1;
    }

    if (pos[0] < cols - 1 && pos[1] < rows - 1) {
        total += uniquePaths(cols, rows, [pos[0] + 1, pos[1]], memo)
        total += uniquePaths(cols, rows, [pos[0], pos[1] + 1], memo)
    } else if (pos[0] === cols - 1) {
        total += uniquePaths(cols, rows, [pos[0], pos[1] + 1], memo)
    } else {
        total += uniquePaths(cols, rows, [pos[0] + 1, pos[1]], memo)
    }

    memo[pos] = total;

    return memo[pos];
};