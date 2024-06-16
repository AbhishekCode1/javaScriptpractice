// How to compare two arrays in JavaScript ?

function arraysAreEqual(arr1, arr2) {
    // Check if arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Check each element in the arrays
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// Example usage:
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [1, 2, 3, 4];

console.log(arraysAreEqual(array1, array2)); // Output: true
console.log(arraysAreEqual(array1, array3)); // Output: false
