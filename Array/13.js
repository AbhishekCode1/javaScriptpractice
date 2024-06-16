//Copy Array Items into Another Array in JavaScript

// Original array
let originalArray = [1, 2, 3, 4, 5];

// Shallow copy using spread operator
let copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3, 4, 5]

// Original array
let originalArray1 = [1, 2, 3, 4, 5];

// Shallow copy using slice()
let copiedArray1 = originalArray1.slice();

console.log(copiedArray1); // Output: [1, 2, 3, 4, 5]

