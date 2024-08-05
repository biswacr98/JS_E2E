
/*
We have two types of memory in JavaScript: Stack Memory and Heap Memory. Primitive data types are stored in Stack while Reference data types are stored in Heap. Whenever Stack Memory is used, we get a copy of the data. But when Heap Memory is used, we get a reference to the data. This is called Call by Value and Call by Reference.

For Primitive Data Types, the value is copied when passed to a function. The original data reference is not changed. Any changes made to the data inside the function will not affect the original data. This is called Call by Value.

For Reference Data Types, the reference is passed when passed to a function. The original data reference is changed. Any changes made to the data inside the function will affect the original data. This is called Call by Reference.
*/

let myName = "Biswa"
let anotherName = myName
anotherName = "Rakesh"

console.log(myName) // Biswa
console.log(anotherName) // Rakesh

// myName and anotherName are stored in Stack Memory. myName is copied to anotherName. So, changing anotherName will not affect myName.

let userOne = {
    email: "abc@gmail.com",
    upi: "abc@jki"
}

let userTwo = userOne

userTwo.email = "def@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

//The actual object is stored in Heap Memory. userOne is stored in Stack Memory. userOne is a reference to the object. Now userTwo is also a reference to the object. So, changing userTwo will affect userOne.
