// Given a 32-bit signed integer, reverse digits of an integer.

// Brute-force
var reverse = function (x) {
    const str = x.toString();

    let revStr;
    if (x > 0) {
        revStr = '';
    } else {
        revStr = '-';
    }

    for(let i = str.length -1;i >=0;i--) {
        revStr += str[i];
    }

    let result = parseInt(revStr, 10);
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return result;
    }

};