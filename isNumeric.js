const isNumeric = s => {
    if (typeof s != 'string') return false;
    // In addition to determining whether currChar isNaN,
    // coersion of input to isNaN will determine if: 
    // number cannot be parsed from input, math operation with input will the result in a not real                number (ie, not an integer), is indeterminate form (ie, undefined or Infinity).
    return !isNaN(s) &&
        !isNaN(parseFloat(s)); // parseFloat will return NaN if string contains whitespace
};