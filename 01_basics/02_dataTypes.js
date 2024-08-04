"use strict"; // treat all JavaScript code as newer version

/*
 If we write alert(3 + 3) here, we'll get the following error:
    error: Uncaught ReferenceError: alert is not defined. alert is not defined in Node.js. It is a browser function. Since we are not binding our code to the browser, we cannot use alert here. There's a different way to use alert in Node.js.
*/

console.log(3
    +
     3) // code readability should be high.

/*
Earlier, JavaScript was different since there were different browsers. So EcmaScript organization was formed to standardize JavaScript. ECMAScript 6 (ES6) is the 6th version of ECMAScript. It was released in 2015. It is also known as ECMAScript 2015. It is the latest version of JavaScript. It has many new features.
For documentation, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript and tc39.es/ecma262
*/

let name = "Biswa" // string
let age = 30 // number
let isLoggedIn = true // boolean
let state = null // null
let address = undefined; // undefined

console.log(typeof(name)) // string. Here, typeof is an operator that returns the data type of the variable.

/*
Primitive data types:
number data type: Range: 2^53
bigInt
string : ""
boolean : true/false
null: is a standalone value. It is a special value which represents "nothing", "empty" or "value unknown".
undefined: is a standalone value. It is a special value which represents "not assigned".
symbol: is a primitive data type. It is used to create unique identifiers for objects.
*/

/*
Objects
*/
console.log(typeof(null)) // object. It is a bug in JavaScript. null is not an object. It is a primitive data type.

console.log(typeof(undefined)) // undefined
