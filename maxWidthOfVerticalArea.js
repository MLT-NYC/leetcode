// Given n points on a 2D plane where points[i] = [xi, yi],
// Return the widest vertical area between two points such that no points are inside the area.

// A vertical area is an area of fixed - width extending infinitely along the y - axis(i.e., infinite height).
// The widest vertical area is the one with the maximum width.

// Note that points on the edge of a vertical area are not considered included in the area.

// Example 1:
// Input: points = [[8, 7], [9, 9], [7, 4], [9, 7]]
// Output: 1
// Explanation: Both the red and the blue area are optimal.

// Example 2:
// Input: points = [[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]
// Output: 3


var maxWidthOfVerticalArea = function (points) {
    const coords = points.sort((coord1, coord2) => coord1[0] - coord2[0]);

    let xDeltaMax = 0;
    for (let i = 0; i < coords.length - 1; i++) {
        const xCoord1 = coords[i][0];
        const xCoord2 = coords[i + 1][0];
        const xDelta = xCoord2 - xCoord1;

        xDeltaMax = xDelta > xDeltaMax ? xDelta : xDeltaMax;
    }

    return xDeltaMax;
};