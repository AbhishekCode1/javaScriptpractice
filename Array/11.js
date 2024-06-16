// How to merge two arrays and remove duplicate items in JavaScript ?
function mergeArraysAndRemoveDuplicates(array1, array2) {
    // Concatenate the arrays
    let mergedArray = array1.concat(array2);

    // Create a Set to store unique values
    let uniqueArray = [...new Set(mergedArray)];

    return uniqueArray;
}

// Example usage:
let array1 = [1, 2, 3];
let array2 = [2, 3, 4, 5];
let mergedAndUnique = mergeArraysAndRemoveDuplicates(array1, array2);
console.log(mergedAndUnique); // Output: [1, 2, 3, 4, 5]

let fruits1 = ['apple', 'banana', 'orange'];
let fruits2 = ['banana', 'kiwi', 'apple'];
let mergedFruits = mergeArraysAndRemoveDuplicates(fruits1, fruits2);
console.log(mergedFruits); // Output: ['apple', 'banana', 'orange', 'kiwi']
