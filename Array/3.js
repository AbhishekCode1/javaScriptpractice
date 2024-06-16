let array = [1, 2, 3, 4, 5];

// Removing the first element
array.shift(2);

console.log(array); // Output: [2, 3, 4, 5]

let array1 = [1, 2, 3, 4, 5];

// Removing the last element
array.pop();

console.log(array1); // Output: [1, 2, 3, 4]

//pop() is efficient and suitable for removing the last element of an array, even for large arrays,
//  because it does not require shifting elements like shift() does


let arr = [1, 2, 3, 4, 5];

// Remove the 3rd element (index 2)

    arr.splice(2,1); // 2 is arr[2] and 1 is remove 1 element only

console.log(arr); // Output: [1, 2, 4, 5]
