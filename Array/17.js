// find the index of capital letter index in array
function findCapitalIndexesInArray(arr) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string' && arr[i] !== arr[i].toLowerCase()) {
            indexes.push(i);
        }
    }
    return indexes;
}

// Example usage:
let inputArray = ["Apple", "banana", "Orange", "kiwi"];
let capitalIndexesArr = findCapitalIndexesInArray(inputArray);

console.log(capitalIndexesArr); // Output: [0, 2] (indexes of "Apple" and "Orange")
