/*
JavaScript is a dynamically typed language. This means that the data type of a variable is determined at runtime. We do not need to specify the data type of a variable. We can change the data type of a variable later in the code. This is not possible in statically typed languages like Java, C++, etc. We use TypeScript to add static typing to JavaScript.
*/

//const score = 100
// const score:Number = 100 // TypeScript


/*
Primitive Data Types: These are call by value which means that the value is copied when passed to a function. The original data reference is not changed. Any changes made to the data inside the function will not affect the original data.

There are 7 types of Primitve Data Types:
String, Number, Boolean, Undefined, Null, Symbol, BigInt

Symbol is used to create unique identifiers for objects. BigInt is used for scientific number storage.
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false

const bigNumber = 3445667784334567788n // BigInt

/*Reference Data Types: These are call by reference which means that the reference is passed when passed to a function. The original data reference is changed. Any changes made to the data inside the function will affect the original data.

There are 3 types of Reference Data Types: Object, Array, Function
*/

const subjects = ["Maths", "Science", "English"]

let myObj = {
    name: "biswa",
    age: 30
}

const greet = function(){
    console.log("Hello World")
}

// Find datatype
console.log(typeof bigNumber) // bigint. If bigNumber is not declared, it will give undefined.

console.log(typeof outsideTemp) // object. It is a bug in JavaScript. null is not an object. It is a primitive data type.

console.log(typeof greet) // function. It is a subtype of object.

console.log(typeof anotherId) // symbol. 
