// count the number of vowel in string 
function countVowels(str) {
    // Define a set of vowels (both lowercase and uppercase)
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    // Initialize a variable to count vowels
    let count = 0;  
    // Iterate through the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.has(char)) {
            count++;
        }
    }   
    return count;
}
// Example usage:
let str = "Hello World";
console.log(countVowels(str)); // Output: 3 (because 'e', 'o', 'o' are vowels)
