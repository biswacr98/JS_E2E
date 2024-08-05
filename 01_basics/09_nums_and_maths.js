/* ---------------------- Numbers ---------------------- */

/*
  Numbers are a data type in JavaScript which can be used to perform mathematical operations.
  Numbers can be integers or floating point numbers.
*/

const score = 400
console.log(score) // 400.
console.log(typeof score) // number. It is a data type.

const balance = new Number(500) // 500. Explicitly creating a number.
console.log(balance) // [Number: 500].

console.log(balance.toString()) // 500. It converts a number to a string.
console.log(balance.toString().length) // 3. It returns the length of the string.
console.log(balance.toFixed(2)) // 500.00. It formats a number using fixed-point notation. Used for ecommerce application to show the price.

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)) // 23.9. It formats a number to a specified length. It is used for scientific calculations.

const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3)) // 124.

const anotherNewNumber = 1123.8966
console.log(anotherNewNumber.toPrecision(3)) // 1.12e+3. The first three are the precision value and the rest are the exponential value.

const hundreds = 100000
console.log(hundreds.toLocaleString()) // 100,000. It converts a number into a string with a local specific separator.

console.log(hundreds.toLocaleString('en-IN')) // 1,00,000. It converts a number into a string with a local specific separator.

console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991. It returns the largest integer that can be represented in JavaScript.

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308. It returns the largest number possible in JavaScript.

console.log(" ")

/* ---------------------- Math Object ---------------------- */

console.log(Math) // Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}. It is an object. It has properties and methods.

console.log(Math.abs(-4)) // 4. It returns the absolute value of a number. It is used to convert negative numbers to positive numbers.

console.log(Math.round(4.7)) // 5. It rounds a number to the nearest integer.

console.log(Math.ceil(4.3)) // 5. It rounds a number up to the nearest integer.

console.log(Math.floor(4.9)) // 4. It rounds a number down to the nearest integer.

console.log(Math.min(0, 150, 30, 20, -8, -200)) // -200. It returns the number with the lowest value.

console.log(Math.max(0, 150, 30, 20, -8, -200)) // 150. It returns the number with the highest value.

console.log(Math.random()) // 0.123456789. It returns a random number between 0 (inclusive), and 1 (exclusive).

console.log(Math.floor(Math.random() * 10)) // 5. It returns a random number between 0 and 9.

console.log((Math.random() * 10) + 1) // 5.123456789. It returns a random number between 1 and 10.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 15. It returns a random number between min and max.
