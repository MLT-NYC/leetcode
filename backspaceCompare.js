// Given two strings S and T, return if they are equal when both are typed into empty text editors.
// # means a backspace character.
//
// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
//
// Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
//
// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
//
// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
//
// Note:
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

var backspaceCompare = function(S, T) {
    const backspace = '#';
    let sEdit = '';
    for (let i = 0; i < S.length; i++) {
        if (S[i] === backspace) {
            sEdit = sEdit.slice(0, sEdit.length-1);
        } else {
            sEdit += S[i];
        }
    }

    let tEdit = '';
    for (let i = 0; i < T.length; i++) {
        if (T[i] === backspace) {
            tEdit = tEdit.slice(0, tEdit.length-1);
        } else {
            tEdit += T[i];
        }
    }

    return sEdit === tEdit;
};
