// any white space in the string

function whitepace(str){
    return /\s/.test(str); // "\s" metacharacter is used to match the whitespace character.
    //The test() method of RegExp instances executes a search with this regular expression for a match between a regular expression and a specified string.
    // Returns true if there is a match; false otherwise.
}
  const str= "hellowhtaisyourname";
  if (whitepace(str)){
    console.log("The string contain white space");
  }else{
    console.log("the string does not conatain white space");
  }

  // second code 
const str1 = "hello world";
const str2 = "helloworld";
const hasWhitespace1 = /\s/.test(str1);
const hasWhitespace2 = /\s/.test(str2);

console.log(hasWhitespace1); // Output: true
console.log(hasWhitespace2); // Output: false
