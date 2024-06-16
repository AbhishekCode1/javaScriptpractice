// remove duplicate element from array

let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

//or

let arr1 = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr1 = [...new Set(arr1)];

console.log(uniqueArr1); // Output: [1, 2, 3, 4, 5]
