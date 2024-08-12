// for of loop

/*
for of loop is used to iterate over the elements of an array. Syntax: for (variable of array) { // code block }. The variable is assigned the value of each element of the array. The code block is executed for each element of the array.
*/

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
}

// Maps. Maps are used to store key-value pairs. Syntax: new Map(). The key can be of any type. The value can be of any type. The key-value pair is stored in the map. The key is used to access the value. The key is unique. If the key is repeated, the value is overwritten. It remembers the original insertion order of the keys.

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
map.set("FR", "France")
//map.set("IN", "India2"). // this will overwrite the value of IN

console.log(map);

for (const [key, value] of map) { // destructuring the key and value from the map.
    console.log(`Key is ${key} and value is ${value}`);
}

const myObject = {
    "game1": "NFS",
    "game2": "FIFA",
    "game3": "COD"
}

// myObject is not iterable. We can use Object.entries() to convert the object into an iterable.

for (const [key, value] of Object.entries(myObject)) {
    console.log(`Key is ${key} and value is ${value}`);
}
