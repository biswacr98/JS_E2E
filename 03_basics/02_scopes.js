//let a = 10
//const b = 20
//var c = 30

//console.log(a) // 10
//console.log(b) // 20
//console.log(c) // 30

/*
Global Scope: The variables defined outside the block are called global variables. They are accessible throughout the program.

Block Scope: The variables defined inside the block are called block variables. They are accessible only inside the block.

*/

let someValue = 10

{
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a) // a is not defined. The variable a is defined inside the block. So, it is not accessible outside the block.
//console.log(b) // b is not defined. The variable b is defined inside the block. So, it is not accessible outside the block.
console.log(c) // 30. The variable c is defined using var. So, it is accessible outside the block.

var f = 4000

if (true){
    let d = 1
    const e = 2
    var f = 3 // even if we wrote f = 3 here, still issue will persist
}

console.log(f) // 3. The variable f is defined using var. So, it is accessible outside the block. The value of f is changed to 3 inside the block. So, the value of f is 3.

let item1 = 500

if (true) {
    let item1 = 10
    const item2 = 20
    console.log("Inner Item1: ", item1) // 10. The variable item1 value is defined inside the block. So, the value of item1 is 10.
}

console.log(item1) // 500. The variable item1 value is defined outside the block. So, the value of item1 is 500.

/*
Global Scope & Block Scope with respect to var, let & const.

Global Scope: The variables defined using var are accessible throughout the program.

Block Scope: The variables defined using var are not block scoped. The variables defined using let and const are block scoped. It means that the variables defined using var are accessible outside the block. The variables defined using let and const are not accessible outside the block.

*/

// Nested Scope.

function one() {
    const username = "biswarup"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    //console.log(website) // website is not defined. The variable website is defined in the inner function. So, it is not accessible in the outer function.

    two() // biswarup. The variable username is defined in the outer function. So, it is accessible in the inner function.
}

one()

/*
Whenever we declare a function, a call stack is created. The function is pushed to the call stack. When the function is executed, it is popped from the call stack. Each function will create it's own call stack.
*/

if (true){
    const username = "biswa"
    if (username === "biswa") {
        const website = "youtube"
        console.log(username + website)

    }
    //console.log(website) // website is not defined. The variable website is defined inside the inner block. So, it is not accessible outside the inner block.

}

//console.log(username) // username is not defined. The variable username is defined inside the block. So, it is not accessible outside the block.

console.log(addOne(5)) // 6. The function addOne is a function declaration. So, it can be accessed before it is defined.

function addOne(num){
    return num + 1
}

//addOne(5)



//addTwo(5) // Cannot access 'addTwo' before initialization. This is because addTwo is a function expression. So, it cannot be accessed before it is initialized.

//addTwo is a function expression.
const addTwo = function(num){
    return num + 2
}

addTwo(5)

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. Hoisting creates execution context. An execution context is an environment in which the JavaScript code is executed. It consists of variables, functions, arguments, etc.
