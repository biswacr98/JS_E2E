/*
Conversion within same data type is pretty straight forward.
*/

console.log(2 > 1) // true
console.log(2 < 1) // false
console.log(2 >= 1) // true
console.log(2 <= 1) // false
console.log(2 == 1) // false
console.log(2 != 1) // true

console.log(" ")

/*
But when we compare different data types, JavaScript will convert one of the values to the other data type.
*/

console.log("2" > 1) // true
console.log("02" > 1) // true

console.log(" ")

console.log(null > 0) // false
console.log(null == 0) // false!
console.log(null >= 0) // true. This is because null is converted to 0.
console.log(null == undefined) // true. This is because null and undefined are equal in the == operator.

/*
Equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (4) null > 0 is false. On the other hand, the  == operator considers null equal to only null or undefined, but not to 0.
*/

console.log(" ")

/*
Strict equality === checks the equality without type conversion. It is used to check if two values are equal in type and value.
*/

console.log("2" == 2) // true
console.log("2" === 2) // false
