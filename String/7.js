// whitespace using for loop
function whiteSpace(str){
    for (let i= 0; i<str.lenght; i++){
        if (str[i]===""){
            return true;
        }
      }
    return false;
}
 const str = "Hellow what is your name";
 console.log(whiteSpace(str));