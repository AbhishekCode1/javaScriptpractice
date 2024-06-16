function reverseSting(str){
  //const strRev = str.split('').reverse().join('');
  const strRev = [...str].reverse().join('');
  return strRev;
}

const str = "Abhishek";
console.log(reverseSting(str));
