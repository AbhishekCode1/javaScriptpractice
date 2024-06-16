// remove space between string 

let originalText = "Abhishek Singh Home";
 let removeSpace = originalText.split(" ").join("");
 console.log(removeSpace);

 // originalText.split(" ") splits the string into an array of substrings based on spaces.

// .join("") then joins these substrings back together into a single string without any spaces between them.