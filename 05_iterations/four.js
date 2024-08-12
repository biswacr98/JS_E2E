/*
for in loop is used to iterate over the properties of an object. Syntax: for (variable in object) { // code block }. The variable is assigned the key of the object. The code block is executed for each key of the object. The for in loop iterates over the enumerable properties of an object. The for in loop does not iterate over the prototype properties of an object.
*/

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby",
    swift: "Swift By Apple"
}

for (const key in myObject) {
    console.log(`Key is ${key} and value is ${myObject[key]}`);
}

const programming = ["js", "cpp", "py", "rb", "swift"]

for (const key in programming) {
    console.log(`Key is ${key} and value is ${programming[key]}`); // key is the index of the array here.
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
map.set("FR", "France")

for (const key in map) {
    console.log(`Key is ${key} and value is ${map[key]}`);
}
// Nothing is printed because map is not iteratable. 
