//JavaScript Program to Count the Occurrences of Each Character in string 

function countCharacters(str) {
    // Create an object to store the frequency of each character
    let charCount = {};

    // Remove whitespace and convert all characters to lowercase (case insensitive)
    str = str.replace(/\s/g, '').toLowerCase();

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Get the current character
        let char = str[i];

        // Check if the character is already counted, if not, initialize it to 1, else increment the count
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    // Print the character counts
    for (let char in charCount) {
        console.log(`${char}: ${charCount[char]}`);
    }
}

// Example usage:
let inputString = "Hello World";
countCharacters(inputString);
