// Generate code snippets for all string prototype method examples in this file.

// 1. String.prototype.length
const gameName = new String("biswa")
console.log(gameName.length) // 5. It has length property.

// 2. String.prototype.toUpperCase()
console.log(gameName.toUpperCase()) // BISWA. It has prototype methods. It is immutable. It does not change the original string. It returns a new string.

// 3. String.prototype.charAt()
console.log(gameName.charAt(0)) // b. It has prototype methods. It returns the character at the specified index.

// 4. String.prototype.indexOf()
console.log(gameName.indexOf("s")) // 2. It has prototype methods. It returns the index of the first occurrence of the specified value.

// 5. String.prototype.substring()
const playGround = "biswa-playground"
const newString = playGround.substring(0, 5) // biswa. It is a prototype methods. It returns the part of the string between the start and end indexes, or to the end of the string. Substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.

console.log(newString) // biswa

// 6. String.prototype.slice()
const anotherString = playGround.slice(-16, 5) // biswa. It is a prototype methods. It extracts a part of a string and returns a new string. It can take negative indexes.

console.log(anotherString) // biswa

// 7. String.prototype.trim()
const newStringOne = "      biswa    "
console.log(newStringOne.trim()) // biswa. It removes whitespace and line terminators from both sides of a string. It does not remove whitespace from the middle of a string.

// 8. String.prototype.replace()
const url = "https://www.biswa.net/biswa%20playground"
console.log(url.replace('%20', '-')) // https://www.biswa.net/biswa-playground. It replaces a specified value with another value in a string.

// 9. String.prototype.includes()
console.log(url.includes('biswa')) // true. It checks whether a string contains the specified value.

// 10. String.prototype.split()
const anotherPlayGround = "biswa-playground-com"
console.log(anotherPlayGround.split("-")) // ["biswa", "playground", "com"]. It splits a string into an array of substrings

// 11. String.prototype.concat()
const str1 = 'Hello'
const str2 = 'World'
console.log(str1.concat(' ', str2)) // Hello World. It combines two or more strings.

// 12. String.prototype.endsWith()
const str3 = 'Hello World'
console.log(str3.endsWith('World')) // true. It checks whether a string ends with a specified value.

// 13. String.prototype.startsWith()
console.log(str3.startsWith('Hello')) // true. It checks whether a string starts with a specified value.

// 14. String.prototype.repeat()
console.log(str3.repeat(2)) // Hello WorldHello World. It returns a new string with a specified number of copies of an existing string.

// 15. String.prototype.match()
const str4 = 'The rain in SPAIN stays mainly in the plain'
console.log(str4.match(/ain/g)) // ["ain", "ain", "ain"]. It searches a string for a match against a regular expression, and returns the matches. The g modifier is used to perform a global match (find all matches rather than stopping after the first match).

// 16. String.prototype.search()
console.log(str4.search("SPAIN")) // 12. It searches a string for a specified value and returns the position of the match.

// 17. String.prototype.trimStart()
console.log(newStringOne.trimStart()) // biswa    . It removes whitespace from the beginning of a string.

// 18. String.prototype.trimEnd()
console.log(newStringOne.trimEnd()) //       biswa. It removes whitespace from the end of a string.

// 19. String.prototype.padStart()
const str5 = '5'
console.log(str5.padStart(4, '0')) // 0005. It pads a string with another string until the resulting string reaches the given length.

// 20. String.prototype.padEnd()
console.log(str5.padEnd(4, '0')) // 5000. It pads a string with another string until the resulting string reaches the given length.

// 21. String.prototype.toLowerCase()
console.log(str3.toLowerCase()) // hello world. It converts a string to lowercase letters.

// 22. String.prototype.charCodeAt()
console.log(str3.charCodeAt(0)) // 72. It returns the Unicode of the character at a specified index in a string. The first character was H which has a Unicode of 72.

// 23. String.prototype.fromCharCode()
console.log(String.fromCharCode(72)) // H. It converts Unicode values to characters.

// 24. String.prototype.at()
console.log(str3.at(0)) // H. It returns the character at a specified index in a string. Difference between charAt() and at() is that at() supports negative indexes.

// 25. String.prototype.codePointAt()
console.log(str3.codePointAt(0)) // 72. It returns the Unicode of the character at a specified index in a string. The first character was H which has a Unicode of 72. It supports Unicode values greater than 0xFFFF. Difference between charCodeAt() and codePointAt() is that codePointAt() supports Unicode values greater than 0xFFFF.

