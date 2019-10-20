// Given two arrays arr1 and arr2, the elements of arr2 are distinct, 
// and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 
// are the same as in arr2.Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// Input: arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
// Output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]

// Constraints:

// arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// Each arr2[i] is distinct.
// Each arr2[i] is in arr1.

const relativeSortArray = function (arr1, arr2) {
    const arr1Map = {};
    const uniqEles = []
    arr1.forEach(ele => {
        if (arr1Map[ele]) {
            arr1Map[ele] += 1
        } else {
            arr1Map[ele] = 1
        }

        if (!arr2.includes(ele)) uniqEles.push(ele);
    });

    const newArr = [];
    arr2.forEach(ele => {
        if (arr1Map[ele]) {
            for (let i = 0; i < arr1Map[ele]; i++) {
                newArr.push(ele)
            }
        }
    });


    uniqEles.sort((a, b) => a - b);
    return newArr.concat(uniqEles);
};