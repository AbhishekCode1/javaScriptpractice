// find the index number of capital letter.

function findCapitalIndexesInString(str) {
    let indexes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toLowerCase()) {
            indexes.push(i);
        }
    }
    return indexes;
}

// Example usage:
let inputString = "Hello World!";
let capitalIndexes = findCapitalIndexesInString(inputString);

console.log(capitalIndexes); // Output: [0, 6] (indexes of 'H' and 'W')
