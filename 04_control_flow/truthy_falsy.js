/*
Truthy and Falsy values in JavaScript are values that are considered true or false when encountered in a boolean context. There are seven falsy values in JavaScript. They are: 0, -0, 0n (found in bigint), null, undefined, NaN, false, "". Everything else is truthy. In JavaScript, a value is considered falsy if it converts to false when evaluated in a boolean context. For example, an empty string is falsy because Boolean('') returns false. The only values that are falsy are 0, -0, 0n (found in bigint), null, undefined, NaN, false, "". All other values are truthy. "0" is truthy because it is a non-empty string. " ", [], {}, and function(){} are all truthy because they are non-empty objects. */

const userEmail = "b@biswa.ai"

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

// check empty array
const emptyArray = []
if (emptyArray.length === 0){
    console.log("Array is empty")
}

// check empty object
const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}

console.log(false == 0) // true. Both are falsy
console.log(false == '') // true. Both are falsy
console.log(0 == '') // true. Both are falsy

// Nullish Coalescing Operator (??): null, undefined. It is used to check if the value is null or undefined. If the value is null or undefined, it will return the right side value. If the value is not null or undefined, it will return the left side value.

let val1;
//val1 = 5 ?? 10 // 5. If the value is not null or undefined, it will return the left side value
//val1 = null ?? 10 // 10. If the value is null or undefined, it will return the right side value
//val1 = undefined ?? 20 // 20. If the value is null or undefined, it will return the right side value
val1 = null ?? 10 ?? 20. // 10. If the value is null or undefined, it will return the right side value. The answer is 10 and not 20 because the first right side value is 10 and not 20. If the first right side value is null or undefined, it will return the second right side value.
console.log(val1)

// Ternary Operator: It is a shorthand for if else statement. It is used to check a condition and return a value based on the condition. It is written as condition ? value1 : value2. If the condition is true, it will return value1. If the condition is false, it will return value2.

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80") // greater than 80
