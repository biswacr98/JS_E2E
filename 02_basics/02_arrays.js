const items = ["milk", "bread", "cheese"]
const electronic_items = ["laptop", "smartphone", "tablet"]

items.push(electronic_items)

console.log(items) // ["milk", "bread", "cheese", ["laptop", "smartphone", "tablet"]]
/*
Here the electronic_items array is pushed as a single element into the items array. It is treated as a value and not as an array.
*/

console.log(items[3][1]) // smartphone. Not a good way to access elements

const appliances = ["washing machine", "refrigerator"]
const appliances_brands = ["LG", "Samsung"]

const appliances_with_brands = appliances.concat(appliances_brands) // Concatenates two arrays. Original arrays are not modified. Returns a new array

console.log(appliances) // ["washing machine", "refrigerator"]. Original array is not modified

console.log(appliances_with_brands) // ["washing machine", "refrigerator", "LG", "Samsung"]

const all_appliance_brands = [...appliances, ...appliances_brands] // Using spread operator. Original arrays are not modified. Returns a new array

console.log(all_appliance_brands) // ["washing machine", "refrigerator", "LG", "Samsung"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]]

const real_another_array = another_array.flat(Infinity) // Flattens the array. Infinity is used to flatten nested arrays of any depth

console.log(real_another_array) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


console.log(Array.isArray("Biswa")) // false
console.log(Array.from("Biswa")) // ["B", "i", "s", "w", "a"]. Converts a string to an array
console.log(Array.from({name: "Biswa"})) // []. This returns an empty array because it is not able to convert it to an array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]. Converts a list of arguments to an array. This creates a new array instance from a variable number of arguments, regardless of number or type of the arguments.


