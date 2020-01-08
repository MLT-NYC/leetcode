// You are given an array coordinates, coordinates[i] = [x, y], 
// where[x, y] represents the coordinate of a point.
// Check if these points make a straight line in the XY plane.

var getSlope = function (coord1, coord2) {
    const x1 = coord1[0];
    const y1 = coord1[1];
    const x2 = coord2[0];
    const y2 = coord2[1];
    return (y2 - y1) / (x2 - x1);
};

var checkStraightLine = function (coordinates) {
    const globalSlope = getSlope(coordinates[0], coordinates[coordinates.length - 1]);
    let isStraight = true;
    for (let i = 1; i < coordinates.length; i++) {
        let currentSlope = getSlope(coordinates[i], coordinates[i - 1])
        if (globalSlope !== currentSlope) {
            isStraight = false;
            break;
        }
    }
    return isStraight;
};