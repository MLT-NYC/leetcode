// Given an array of citations (each citation is a non-negative integer) of a researcher,
// write a function to compute the researcher's h-index.
//
// According to the definition of h-index on https://en.wikipedia.org/wiki/H-index:
// "A scientist has index h if h of his/her N papers have at least h citations each,
// and the other N − h papers have no more than h citations each."
//
//      Example:
//      Input: citations = [3,0,6,1,5]
//      Output: 3
//      Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had
//      received 3, 0, 6, 1, 5 citations respectively.
//      Since the researcher has 3 papers with at least 3 citations each and the remaining
//      two with no more than 3 citations each, her h-index is 3.
//
// Note: If there are several possible values for h, the maximum one is taken as the h-index.

var hIndex = function(citations) {
    const sortedCitations = citations.sort((a, b) => {
        if (a > b) return -1;
        if (a < b ) return 1;
        return 0;
    });

    for (let i = 0; i < sortedCitations.length; i++) {
        const citationCount = sortedCitations[i];
        const citationPos = i + 1;

        if (citationPos > citationCount) return i;
    }

    return citations.length
};
