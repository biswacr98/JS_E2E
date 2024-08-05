/*
Arrays in JavaScript are resizable and can contain a mix of different data types.

They are not associative arrays, and so they are not indexed by strings. They are indexed by integers, and the first element of an array is at index 0.

Arrays are zero-indexed, which means that the first element in an array is at index 0, and the last element is at index length - 1.

JavaScript Array copy operations create shallow copies, which says that the new array will contain references to the same objects as the original array.

*/

 const myArr = [0, 1, 2, 3, 4, 5, true, "biswa"]

 const myArr2 = new Array(0, 1, 2, 3, 4, 5)

 console.log(myArr2[0]) // 0

 //Array Methods. These are the prototype methods of the Array object. 

//1. push() - Adds one or more elements to the end of an array.
myArr2.push(6)
myArr2.push(7)
console.log(myArr2) // [0, 1, 2, 3, 4, 5, 6, 7]

//2. pop() - Removes the last element from an array.
myArr2.pop() // 7 is popped
console.log(myArr2) // [0, 1, 2, 3, 4, 5, 6]

//3. unshift() - Adds one or more elements to the beginning of an array. To insert element at the beginning, essentially we are shifting all other elements to the right. It can be slow for large arrays.
myArr2.unshift(9)
console.log(myArr2) // [9, 0, 1, 2, 3, 4, 5, 6]

myArr2.shift() // 9 is removed
console.log(myArr2) // [0, 1, 2, 3, 4, 5, 6]

//4. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log(myArr2.includes(3)) // true

//5. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log(myArr2.indexOf(9)) // -1
console.log(myArr2.indexOf(3)) // 2

//6. join() - Joins all elements of an array into a string.
const newArr = myArr2.join()

console.log(myArr2) // [0, 1, 2, 3, 4, 5, 6]
console.log(newArr) // 0,1,2,3,4,5,6
console.log(typeof newArr) // string

console.log("")

//7. slice() - Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

const myArr3 = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr3) // A [0, 1, 2, 3, 4, 5]

const mynewArray = myArr3.slice(1, 3)

console.log(mynewArray) // [1, 2]

console.log("B ", myArr3) // B [0, 1, 2, 3, 4, 5]. Original array is not modified

//8. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const mynewArray2 = myArr3.splice(1, 3)
console.log("C ", myArr3) // C [0, 4, 5]. Original array is modified
console.log(mynewArray2) // [1, 2, 3]
