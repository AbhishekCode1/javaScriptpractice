//How to get all unique values (remove duplicates) in a JavaScript array?

function getUniqueValues(array) {
    // Create a Set from the array, which automatically removes duplicates
    let uniqueArray = [...new Set(array)];
    return uniqueArray;
}

// Example usage:
let array1 = [1, 2, 3, 3, 4, 5, 5];
let uniqueValues1 = getUniqueValues(array1);
console.log(uniqueValues1); // Output: [1, 2, 3, 4, 5]

let array2 = ['apple', 'banana', 'orange', 'banana', 'kiwi'];
let uniqueValues2 = getUniqueValues(array2);
console.log(uniqueValues2); // Output: ['apple', 'banana', 'orange', 'kiwi']
// example number 7 is same