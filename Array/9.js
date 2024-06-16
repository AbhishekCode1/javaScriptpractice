// which is duplicate element of the array

function findDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) !== index);
}

let arr = [1, 2, 2, 3, 4, 4, 5];
let duplicates = findDuplicates(arr);

console.log(duplicates); // Output: [2, 4]
// but this method does not preserve the order of array.