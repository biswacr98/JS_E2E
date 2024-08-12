// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}

/* For loop structure:
for (initialization; condition; increment/decrement)
{
    // code block
}.
The initialization is executed only once at the beginning. The condition is checked before every iteration. If the condition is true, the code block is executed. After the code block is executed, the increment/decrement is executed. The condition is checked again. If the condition is true, the code block is executed again. This process continues until the condition is false
*/

// cmd + d to select multiple instances of a word

// for loop with if-else

for (let i = 0; i <= 10; i++){
    const element = i;
    if (element == 5){
        console.log("Five");
    }

    console.log(element);
}
// variable i has a scope only inside the for loop. It is not accessible outside the for loop.

for (let i = 0; i <= 10; i++){
    console.log(`Outer loop i value: ${i}`);
    for (let j = 0; j <= 10; j++){
        console.log(`Inner loop j value: ${j} and inner loop i value: ${i}`);
    }
}

for (let i = 0; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++){
        console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue. break is used to exit the loop. continue is used to skip the current iteration and move to the next iteration.

for (let index = 0; index <= 20 ; index++) {
    if (index == 5){
        console.log(`Detected 5, breaking the loop`);
        break;
    }
    console.log(`Value of i is: ${index}`);
}

for (let index = 0; index <= 20 ; index++) {
    if (index == 5){
        console.log(`Detected 5, skipping this iteration`);
        continue;
    }
    console.log(`Value of i is: ${index}`);
}


