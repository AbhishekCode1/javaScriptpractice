// count number of string using filter and split method 
function coountWords(str){

    return str.split(/\s+/).filter(word => word !=="").length;
}

const str ="Hello what is your name";
console.log(coountWords(str));