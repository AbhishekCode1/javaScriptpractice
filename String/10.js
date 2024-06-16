function removeFirstChar(str) {
    return str.slice(1); // remove first character of string
    // return str.slice(0, -1); last character of string   index 0 to last -1.
}

const str = "Hello, world!";
// const modifiedString = removeFirstChar(originalString);

console.log(removeFirstChar(str)); // Output: "ello, world!"
