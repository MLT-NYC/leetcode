// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are(i, 0) and(i, height[i]).

// Find two lines that together with the x - axis form a rectangle, such that the rectangle contains the most area.

// Return the maximum area of all rectangles formed by 'height'.

// Notice that you may not slant the rectangles.

// Example 1:
// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
// Explanation: The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].In this case, the max area of water(blue section) the container can contain is 49.

// Example 2:
// Input: height = [1, 1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// Helper for determining area
const area = (y1, x1, y2, x2) => {
    const height = y1 < y2 ? y1 : y2;
    const width = x2 - x1;
    return height * width;
};

// Helper for max of given integers
const maxHeight = heights => {
    let max = heights[0];
    for (let i = 1; i < heights.length; i++) {
        max = heights[i] > max ? heights[i] : max;
    }
    return max;
};

const maxArea = (heights, x1 = 0, x2 = heights.length - 1, max = maxHeight(heights)) => {
    //     Recursive base case, return if there are only two elements left.
    if (x2 - x1 < 2) return area(heights[x1], x1, heights[x2], x2);

    //     Determine the area of the outermost rectangle;
    const outer = area(heights[x1], x1, heights[x2], x2);

    //     Determine the greatest area of the inner rectangles.
    //     Eliminate from consideration the lesser of the two outermost heights, during this recursive step.
    let inner;
    if (heights[x1] > heights[x2]) {
        inner = maxArea(heights, x1, x2 - 1, max);
    } else {
        inner = maxArea(heights, x1 + 1, x2, max);
    }

    //     Return the greater of either the outer or inner rectangles;
    return outer > inner ? outer : inner;
};