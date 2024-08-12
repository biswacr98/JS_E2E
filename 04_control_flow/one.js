// if

// if (condition){

//     // if the condition is true, this block of code will run
// }

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log('Welcome to the website');
}

// Comparison Operators <, >, <=, >=, ==, ===, !=, !==.

// === is strict equality operator, it checks the value and the type of the value.

if (2 === '2') {
    console.log("This will not run");
}

// !== is strict inequality operator, it checks the value and the type of the value.

const temperature = 41

if (temperature === 41){
    console.log("less than 50")
}
console.log("temperature is greater than 50")
// both the console.log will run

//if else

if (temperature === 41){
    console.log("less than 50")
}
else{
    console.log("temperature is greater than 50")
}
// only the first console.log will run

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`)
}
// console.log(`User power: ${power}`) // this will throw an error because power is not defined outside the if block

if (score > 100)
{
    var power = "lasers"
    console.log(`User power: ${power}`)
}
console.log(`User power: ${power}`) // this will not throw an error since var is globally scoped

const balance = 1000

//if (balance > 500) console.log("test"); //implicit scoping

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("greater than 1200");
}

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// Logical Operators
if (userloggedIn && debitCard && 2 == 3) { // && is logical AND operator
    console.log("Allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail) { // || is logical OR operator
    console.log("User logged in")
}
