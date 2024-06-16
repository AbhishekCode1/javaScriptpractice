//JavaScript Program to Merge Two Arrays Without Creating a New Array

function mergeArrays(array1, array2) {
    // Iterate through array2 and push each element to array1
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
}

// Example usage:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

mergeArrays(array1, array2);

console.log(array1); // Output: [1, 2, 3, 4, 5, 6]
console.log(array2); // Output: [4, 5, 6] (array2 remains unchanged)
