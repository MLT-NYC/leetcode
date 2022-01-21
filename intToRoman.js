// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.However, the numeral for four is not IIII.Instead, the number four is written as IV.Because the one is before the five we subtract it making four.The same principle applies to the number nine, which is written as IX.There are six instances where subtraction is used:

// I can be placed before V(5) and X(10) to make 4 and 9. 
// X can be placed before L(50) and C(100) to make 40 and 90. 
// C can be placed before D(500) and M(1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Example 1:
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.

// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= num <= 3999

var intToRoman = function (num) {
    //     Make 4 arrays, one for each 10^x place (0 <= x <= 3).
    //     0 is the x min, since 10^0 = 1 and is the numeric series place of the the minimum contraint (1).
    //     3 is the x max, since 10^3 = 1000 and is the numeric place of the max contraint (3999).
    //     So: ones, tens, hundreds, and thousands. 

    //     Each array will contain every combination of roman numeral combinations possible at that 10's place. 
    //     Each array is sorted from lowest to greatest roman numeral value.
    //     Each arrach begins with an empty string. 

    const thousands = ['', 'M', 'MM', 'MMM'];
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    //     Extract each digit from the number by it's numeric place
    const thousandsDigit = Math.floor(num / 1000);
    const hundredsDigit = Math.floor((num % 1000) / 100);
    const tensDigit = Math.floor((num % 100) / 10);
    const onesDigit = Math.floor(num % 10);

    //     Since, every roman number is a product of its index and numeric place.

    //     We, simply access each numeric place array, with the corresonding index (the 'digit'),
    //     and we concatenate and return.   
    return thousands[thousandsDigit] + hundreds[hundredsDigit] + tens[tensDigit] + ones[onesDigit];
};