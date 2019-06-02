// Given a 32-bit signed integer, reverse digits of an integer.

// Brute-force
var reverse = function (x) {
    const str = x.toString();
    let revStr = '';

    for(let i = str.length -1;i >=0;i--) {
        revStr += str[i];
    }

    return parseInt(revStr, 10);
};