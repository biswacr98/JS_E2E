//Constants are declared using the const keyword. They cannot be reassigned.
const accountId = 144353

//Variables declared using the let keyword and the var keyword. They can be reassigned.
let accountEmail = "abc@gmail.com"

var accountPassword = "12345"

accountCity = "Kolkata"

// If we declare a variable with let keyword and do not assign any value, it will be undefined.
let accountState;

//try to change
// accountId = 2 // Error: Uncaught TypeError: Assignment to constant variable.

accountEmail = "hc@hc.com"
accountPassword = "234455432"
accountCity = "Delhi"

//console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var keyword because of issue in block scope and functional scope.
*/
