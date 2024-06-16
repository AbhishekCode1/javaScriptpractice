// make first letter of string uper case

function upperCase(str){
    let string = str[0].toUpperCase()+str.slice(1);
    return string
};

let str ="mine";
console.log(upperCase(str));    
