const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map ( (num) => num + 10)
console.log(newNums) // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/*
map() is used to create a new array by performing an operation on each element of the original array. Syntax: array.map( (element) => { // code block } ). The code block is executed for each element of the array. The element is the current element of the array. The result of the code block is stored in a new array. The new array is returned.
*/

// chaining

const myNewNums = myNumbers
                  .map( (num) => num * 10 )
                  .map( (num) => num + 1)

console.log(myNewNums) // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

const myNewNums2 = myNumbers
                  .map( (num) => num * 10 )
                  .map( (num) => num + 1)
                  .filter( (num) => num >= 40)

console.log(myNewNums2) // [41, 51, 61, 71, 81, 91, 101]
