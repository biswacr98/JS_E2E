/*
Functions in JaavScript are first class objects. They can be passed around like any other value. Functions can be assigned to variables, stored in objects or arrays, passed as arguments to functions, and returned from functions.
*/

function sayMyName() // This is a function declaration. This is a named function. We can call this function by its name.
{
    console.log("B")
    console.log("I")
    console.log("S")
    console.log("W")
    console.log("A")
}

sayMyName() // B I S W A. This is function invocation. We are calling the function sayMyName.

function addTwoNumbers(number1, number2) // This is a function declaration with parameters. number1 and number2 are parameters.
{
    console.log(number1 + number2)
}

addTwoNumbers() // NaN. This is function invocation. We are calling the function addTwoNumbers without passing any arguments. So, number1 and number2 are undefined. So, the result is NaN.

addTwoNumbers(2, 3) // 5. This is function invocation. We are calling the function addTwoNumbers with arguments 2 and 3. So, number1 is 2 and number2 is 3. So, the result is 5. 2 and 3 are arguments.

addTwoNumbers(2, "3") // 23. This is function invocation. We are calling the function addTwoNumbers with arguments 2 and "3". So, number1 is 2 and number2 is "3". So, the result is 23. The + operator concatenates the two strings.

const result = addTwoNumbers(3,5)

console.log(result) // undefined. The function addTwoNumbers does not return anything. So, the result is undefined.

function modifiedAddTwoNumbers(number1, number2)
{
    //let result = number1 + number2
    //console.log("Biswa"). This will be executed
    //return result
    // console.log("Biswa") // This line will not be executed. The return statement stops the execution of the function.

    return number1 + number2 // This is the same as the above. The return statement stops the execution of the function.
}

const modifiedResult = modifiedAddTwoNumbers(3,5)

console.log("Modified Result: ", modifiedResult) // 8. The function modifiedAddTwoNumbers returns the result. So, the result is 8.

function loginUserMessage(username){
    return `${username} logged in successfully`
}

console.log(loginUserMessage("biswa")) // biswa logged in successfully

console.log(loginUserMessage()) // undefined logged in successfully. The function loginUserMessage expects an argument. If we do not pass an argument, the result is undefined.

function loginUserMessageWithValidation(username){
    if(username === undefined){
        console.log("Please provide a username")
        return
    }
    return `${username} logged in successfully`
}

console.log(loginUserMessageWithValidation()) // Please provide a username and undefined. The reason why we are getting undefined is because the function loginUserMessagewWithValidations does not return anything if the username is not provided. So, the result is undefined.

function loginUserMessageWithAlternateValidation(username)
{
    if(!username){ // If username is not provided, then the value of username is undefined. So, !undefined is true. So, the if block is executed.
        console.log("Please provide a username")
        return
    }
    return `${username} logged in successfully`
}

console.log(loginUserMessageWithAlternateValidation()) // Please provide a username and undefined. The reason why we are getting undefined is because the function loginUserMessageWithAlternateValidation does not return anything if the username is not provided. So, the result is undefined.

function loginUserMessageWithDefaultValidation(username = "Guest")
{
    if(!username){ // If username is not provided, then the value of username is undefined. So, !undefined is true. So, the if block is executed.
        console.log("Please provide a username")
        return
    }
    return `${username} logged in successfully`
}

console.log(loginUserMessageWithDefaultValidation()) // Guest logged in successfully. The default value of username is Guest. So, the result is Guest logged in successfully.

function calculateCartPrice(num1)
{
    return num1
}

console.log(calculateCartPrice(2)) // 2

console.log(calculateCartPrice(200, 400, 500)) // 200. The function calculateCartPrice expects only one argument. So, the other arguments are ignored. We can use rest parameters to solve this problem. Rest parameters allow us to represent an indefinite number of arguments as an array.

function calculateCartPriceWithRestParameters(...num1){
    return num1
}

console.log(calculateCartPriceWithRestParameters(200, 400, 500)) // [ 200, 400, 500 ]. The rest parameter num1 is an array of all the arguments passed to the function calculateCartPriceWithRestParameters.

function calculateCartPriceWithNormalParametersAndRestParameters(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPriceWithNormalParametersAndRestParameters(200, 400, 500, 1000)) // [ 500, 1000 ]. The rest parameter num1 is an array of all the arguments passed to the function except the first two arguments. The first two arguments are val1 and val2.

const user  ={
    username: "biswa",
    price: "free"
    //prices: 199. This will make the anyObject.price to be undefined.
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

handleObject({
    username: "biswa",
    price: "free"
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // 400. The function returnSecondValue returns the second value of the array myNewArray.

console.log(returnSecondValue([200, 400, 100, 600])) // 400. The function returnSecondValue returns the second value of the array [200, 400, 100, 600].
