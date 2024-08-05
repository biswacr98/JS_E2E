/*
Arrow functions in JavaScript are a more concise way to write functions. It was introduced in ES6.
*/

const user = {
    username: "biswa",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) // this keyword refers to the current context. In this case, it refers to the user object.
        console.log(this)
    }
}

//user.welcomeMessage() // biswa, welcome to website
//user.username = "sam"
//user.welcomeMessage() // sam, welcome to website. The current context of the username is changed to sam. So, the result is sam, welcome to website.

console.log(this) // {}.

/*
If we execute this on browser engine, the result will be the window object. If we execute this on Node.js, the result will be an empty object. In the browser, the global object is the window object. In Node.js, the global object is an empty object.

Earlier, we had only one way to execute JavaScript code. That was through the browser engine. Now we have standalone JavaScript engines like Node.js. For Browser engine, the global object is the window object. For Node.js, the global object is an empty object.
*/

function coffee(){
    console.log(this)
}

coffee()// If we print this inside a function block in Node environment, we get a huge object. We get a Object [global]. Inside that we get global values and microtasks, performance valuations (idle time, fetch etc.)

function lemontea(){
    let username = "biswa"
    console.log(this.username)
}

lemontea() // undefined. The reason why we are getting undefined is because the variable username is not defined in the global context. It is defined inside the function lemontea. So, it is not accessible outside the function.


const chai = function () {
    let username = "biswa"
    console.log(this.username)
}

chai() // undefined. The reason why we are getting undefined is because the variable username is not defined in the global context. It is defined inside the function chai. So, it is not accessible outside the function.

// Arrow Functions

const chaiArrow = () => {
    let username = "biswa"
    console.log(this.username)
    console.log(this)
}

chaiArrow() // undefined and {}.

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4)) // 7

// Arrow Functions with Implicit Return. This means that we do not need to write the return keyword. We can directly write the expression. If we have only one expression, we can write it in a single line.

const addTwoWithImplicitReturn = (num1, num2) => ( num1 + num2 )

console.log(addTwoWithImplicitReturn(3, 4)) // 7

const addTwoObjectReturn = (num1, num2) => {username: "biswa"}

console.log(addTwoObjectReturn(3, 4)) // undefined. The reason why we are getting undefined is because the object is not returned. The object is not enclosed in the parenthesis. So, the object is not returned.

const correctFunctionForObjectReturn = (num1, num2) => ({username: "biswa"})

console.log(correctFunctionForObjectReturn(3, 4)) // { username: 'biswa' }
