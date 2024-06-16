//Find the Array Index with a Value in JavaScript
//1
let array = [10, 20, 30, 40, 50];

let value = 30;
let index = array.indexOf(value);

console.log(index); // Output: 2 (index of value 30 in the array)
//2
let array1 = [10, 20, 30, 40, 50];

let value1 = 60;
let index1 = array.indexOf(value1);

console.log(index1); // Output: -1 (value 60 is not in the array)
//3
let array2 = [10, 20, 30, 40, 50];

let value2 = 30;
let index2 = array.findIndex(item => item === value2);

console.log(index2); // Output: 2 (index of value 30 in the array)
