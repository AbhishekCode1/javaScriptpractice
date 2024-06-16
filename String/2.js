// How to get nth occurrence of a string in JavaScript ?
function nthOccurrence(str, substr, n) {
    // Initialize variables to track occurrences and position
    let count = 0;
    let position = 0;

    // Use indexOf to find occurrences
    while (count < n) {
        position = str.indexOf(substr, position);
        if (position === -1) break; // If substr is not found
        position += 1; // Move past the previous match
        count++;
    }

    // Return position if nth occurrence is found, otherwise -1
    return position > 0 ? position - 1 : -1;
}

// Example usage:
let text = "Hello hello world hello";
let substring = "hello";
let nth = 3;

let index = nthOccurrence(text.toLowerCase(), substring.toLowerCase(), nth);

console.log(index); // Output: 19 (index of the 3rd occurrence of "hello")
