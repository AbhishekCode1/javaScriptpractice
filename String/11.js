// convert a object into string by using Json.Stringyfy() 

const object = {
    name: "Abhishek",
    lastname: "Singh",
    Age:"27"
};

const newword = JSON.stringify(object);
console.log(newword);