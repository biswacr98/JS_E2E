const name = "biswa"
const repoCount = 2

console.log(name + repoCount + " repositories") // biswa2 repositories

/*
The modern way to concatenate strings is using string interpolation. We use backticks (`) to enclose the string and ${} to insert variables.
*/

console.log(`${name} has ${repoCount} repositories`) // biswa has 2 repositories

const gameName = new String("biswa")
console.log(gameName) // String {"biswa"}. It is an object. It has key-value pairs. It has a length property and prototype methods.

console.log(gameName[0]) // b. It is a string. It has index.
console.log(gameName.__proto__) // String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}. It has prototype methods.

console.log(gameName.length) // 5. It has length property.
console.log(gameName.toUpperCase()) // BISWA. It has prototype methods. It is immutable. It does not change the original string. It returns a new string.

console.log(gameName.charAt(0)) // b. It has prototype methods. It returns the character at the specified index.

console.log(gameName.indexOf("s")) // 2. It has prototype methods. It returns the index of the first occurrence of the specified value.

const playGround = "biswa-playground"

const newString = playGround.substring(0, 5) // biswa. It is a prototype methods. It returns the part of the string between the start and end indexes, or to the end of the string. Substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.

console.log(newString)

const anotherString = playGround.slice(-16, 5) // biswa. It is a prototype methods. It extracts a part of a string and returns a new string. It can take negative indexes.

console.log(anotherString)

const newStringOne = "      biswa    "
console.log(newStringOne.trim()) // biswa. It removes whitespace and line terminators from both sides of a string. It does not remove whitespace from the middle of a string.

const url = "https://www.biswa.net/biswa%20playground"

console.log(url.replace('%20', '-')) // https://www.biswa.net/biswa-playground. It replaces a specified value with another value in a string.

console.log(url.includes('biswa')) // true. It checks whether a string contains the specified value.

const anotherPlayGround = "biswa-playground-com"

console.log(anotherPlayGround.split("-")) // ["biswa", "playground", "com"]. It splits a string into an array of substrings.
