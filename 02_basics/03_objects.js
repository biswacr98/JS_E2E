/*
Objects are created using two ways: object literals and object constructor. Singleton means that when we create objects using constructor, it creates a single instance of that object. This is not the case with object literals. Object literals do not create a single instance of the object. They create a new instance every time they are called.
*/
// Object constructor
//Object.create()

// Object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Biswa",
    "full name": "Biswarup Chakraborty", // If the key has a space, it should be enclosed in quotes.
    [mySymbol]: "MySymbolKeyValue", //If we used without square brackets, it would have been treated as a string.
    age: 30,
    location: "India",
    email: "abc@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser.email) //abc@google.com
console.log(jsUser["email"]) // abc@google.com. Object literals can also be accessed using square brackets. But they need to be in quotes. This is because the key is treated as a string.

console.log(jsUser["full name"]) // Biswarup Chakraborty. If the key has a space, it should be enclosed in quotes. This is the only way to access it. Dot notation will not work.

console.log(jsUser[mySymbol]) // MySymbolKeyValue. Symbol keys can be accessed using square brackets. Dot notation will not work.

console.log("")
console.log(jsUser)

jsUser.email = "abc@chatgpt.com" // Overriding the email value

Object.freeze(jsUser) // Freezes the object. The object cannot be modified. It is read-only now.

jsUser.email = "abc@microsoft.com" // This will not work. The object is frozen. It will print the same value as before.

console.log(jsUser)

const pythonUser = {
    name: "John",
    age: 25,
    location: "USA",
    email: "john@chatgpt.com"
}

pythonUser.greeting = function () {
    console.log("Hello Python User")
}

console.log(pythonUser.greeting) // [Function (anonymous)]. Function is not executed. We just got the reference to the function.

console.log(pythonUser.greeting()) // Hello Python User. Function is executed. Also undefined is printed because the function does not return anything.

pythonUser.greetingTwo = function () {
    console.log(`Hello Python user, my name is ${this.name}`) // this keyword is used to access the object's property
}

console.log(pythonUser.greetingTwo()) // Hello Python user, my name is John. Also undefined is printed because the function does not return anything.
