/* ------------------------------- Conversions ------------------------------- */
let score = "33"

/*
We need to know the type of the variable score. This is needed because this might be needed in a backend. Maybe the value is being sent from the frontend in a form so the score might be a string / object.

Assume we write the following code:

const {score} = req.body

Here we are not sure if the score is a number or a string.
*/

console.log(typeof(score)) // string
console.log(typeof score) // string

// We can convert the string to a number using the Number() function.
let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) // number

/*
Now assume we have an alphanumeric value. We can convert it to a number using the Number() function. If the value is not a number, it will return NaN (Not a Number).
*/
let alphaNumericValue = "33abc"
let alphaNumericvalueInNumber = Number(alphaNumericValue)
console.log(alphaNumericvalueInNumber) // NaN

/*
Now assume we have a variable with NULL value. We can convert it to a number using the Number() function. If the value is NULL, it will return 0.
*/

let nullValue = null
let nullValueInNumber = Number(nullValue)
console.log(nullValueInNumber) // 0

/*
Now assume we have a variable with undefined value. We can convert it to a number using the Number() function. If the value is undefined, it will return NaN.
*/

let undefinedValue = undefined
let undefinedValueInNumber = Number(undefinedValue)
console.log(undefinedValueInNumber) // NaN

/*
Now assume we have a variable with true value. We can convert it to a number using the Number() function. If the value is true, it will return 1. If the value is false, it will return 0.
*/

let trueValue = true
let trueValueInNumber = Number(trueValue)
console.log(trueValueInNumber) // 1

let falseValue = false
let falseValueInNumber = Number(falseValue)
console.log(falseValueInNumber) // 0

/*
Now assume we have a variable with string value. We can convert it to a number using the Number() function. If the value is a string, it will return NaN.
*/

let stringValue = "abc"
let stringValueInNumber = Number(stringValue)
console.log(stringValueInNumber) // NaN

/*
Now assume we have a boolean variable of value 1. We can convert it to a Boolean using the Boolean() function. If the value is 1, it will return true. If the value is 0, it will return false.
*/

let isLoggedIn = 1
let isLoggedInInBoolean = Boolean(isLoggedIn)
console.log(isLoggedInInBoolean) // true

let isLoggedOut = 0
let isLoggedOutInBoolean = Boolean(isLoggedOut)
console.log(isLoggedOutInBoolean) // false

/*
Now assume we have a boolean variable with string value. We can convert it to a Boolean using the Boolean() function. If the value is a string, it will return true. If the value is an empty string, it will return false.
*/

let stringBoolean = "abcdff"
let stringBooleanInBoolean = Boolean(stringBoolean)
console.log(stringBooleanInBoolean) // true

let emptyStringBoolean = ""
let emptyStringBooleanInBoolean = Boolean(emptyStringBoolean)
console.log(emptyStringBooleanInBoolean) // false

/*
Now assume we have a variable with number value. We can convert it to a string using the String() function.
*/

let someNumber = 33
let someNumberInString = String(someNumber)
console.log(someNumberInString) // "33"
console.log(typeof(someNumberInString)) // string

console.log(" ")

/* ------------------------------- Operations ------------------------------- */

/*
We want to assign a negative value to a variable. We can do this by using the - operator.
*/

let value = 3
let negativeValue = -value
console.log(negativeValue) // -3

/* Basic Mathematical Operaions*/

console.log(2 + 2) // 4
console.log(2 - 2) // 0
console.log(2 * 2) // 4
console.log(2 ** 2) // 4 (exponent)
console.log(2 / 2) // 1
console.log(2 % 2) // 0 (modulus)

console.log(" ")

/* String Operations */

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2 // concatenation of strings
console.log(str3) // hello world

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122 (left to right evaluation). "1" + 2 = "12", "12" + 2 = "122"
console.log(1 + 2 + "2") // 32 (left to right evaluation). 1 + 2 = 3, 3 + "2" = "32". This is because the + operator is left associative.

console.log(+true) // 1. The + operator is used to convert a value to a number. Hence, true is converted to 1.
console.log(+false) // 0. The + operator is used to convert a value to a number. Hence, false is converted to 0.

console.log(+"") // 0. The + operator is used to convert a value to a number. Hence, an empty string is converted to 0.

console.log(" ")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // 4. The assignment operator is right associative. Hence, the value of 2 + 2 is assigned to num3, then num2, and then num1.
console.log(num1, num2, num3) // 4 4 4

let gameCounter = 100
gameCounter++
console.log(gameCounter) // 101

++gameCounter
console.log(gameCounter) // 102

/*
Prefix increment and postfix increment. The difference between the two is that the prefix increment returns the value after incrementing, while the postfix increment returns the value before incrementing.
*/

//example of prefix increment and postfix increment
let a = 1
let b = a++ // postfix increment
console.log(a, b) // 2 1

let c = 1
let d = ++c // prefix increment
console.log(c, d) // 2 2
