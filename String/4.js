// count words of string 

function wordsLen(str) {
   // const array = str.trim().split(/\s+/);
   const array = str.match(/\S+/g); //The g flag ensures all such sequences are matched.
    return array.length;
}

const str = "welcome to the Abhishek house";
console.log(wordsLen(str)); // Output should be 5


// const str = "   welcome   to the   Abhishek house  "; // convert the string into array
// const array = str.trim().split(/\s+/);
// console.log(array); // Output: ["welcome", "to", "the", "Abhishek", "house"]
// if the string is "hello world", split(/\s+/) will produce the array ["hello", "world"].
//  if str is " hello world ", then str.trim() will produce "hello world".
