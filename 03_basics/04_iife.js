/*
Immediately Invoked Function Expressions (IIFE) are functions that are executed as soon as they are defined. Sometimes we create a file where we can have Database connections. We want that as soon as our application starts running, the database connection should be established. So, we can use IIFE for that. We can also use IIFE to create a private scope. We can also use IIFE to avoid polluting the global scope.
*/

function chai(){
    console.log("DB Connection Established")
}

chai(); // ; is needed here to avoid syntax error. If we do not put ;, then the next line will be considered as a function and it will throw an error. chai(...) is not a function.

// IIFE. This is a Named IIFE
(function coffee (){
    console.log("DB Connection Established")
})(); // DB Connection Established. Semicolon is needed here. The function got invoked but it doesn't know when to stop the context. So we need to end it with a semicolon.

( () => {
    console.log("A New DB Connection Established")
}) ();

// Unnamed IIFE with parameters
( (name) => {
    console.log(`Hello ${name}`)
}) ("Biswa");



