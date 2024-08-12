/*
While loop is used to execute a block of code multiple times. The condition is checked before the code block is executed. If the condition is true, the code block is executed. After the code block is executed, the condition is checked again. If the condition is true, the code block is executed again. This process continues until the condition is false.

While loop syntax: while (condition) { // code block }.
*/

let index = 0
while (index <= 10) {
    console.log(`Value of index is: ${index}`);
    index += 2
}

let myArray = ["flash", "batman", "superman"]
let index2 = 0
while (index2 < myArray.length) {
    console.log(`Value is ${myArray[index2]}`);
    index2++
}

/*
Do while loop is used to execute a block of code multiple times. The condition is checked after the code block is executed. If the condition is true, the code block is executed again. This process continues until the condition is false. The do while loop is used when you want to execute the code block at least once.
*/

//let score = 1
let score = 11

do {
    console.log(`Score is: ${score}`); // this will run at least once
    score++
} while (score <= 10);
