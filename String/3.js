// find unique character in the string 
function findUniqueCharacters(str) {
    // Create a Set to store unique characters
    let uniqueCharacters = new Set();
    // Iterate through each character in the string
    for (let char of str) {
        // Add character to Set (Sets automatically handle duplicates)
        uniqueCharacters.add(char);
    }
    // Convert Set back to array (if needed)
    let uniqueCharactersArray = Array.from(uniqueCharacters);
    return uniqueCharactersArray;
}
// Example usage:
let inputString = "hello world";
let uniqueChars = findUniqueCharacters(inputString);
console.log(uniqueChars); // Output: ['h', 'e', 'l', 'o', ' ', 'w', 'r', 'd']
