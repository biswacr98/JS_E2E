/*
Object Destructuring: It is a way to extract multiple values from an object.
*/

const course = {
    courseName: "JavaScript",
    courseDuration: "3 months",
    courseFee: "3000"
}

const {courseName, courseDuration, courseFee} = course // This is object destructuring. We are extracting the values of courseName, courseDuration and courseFee from the course object.

console.log(courseName) // JavaScript
console.log(courseDuration) // 3 months
console.log(courseFee) // 3000

// We can also rename the variables while destructuring.
const {courseName: name, courseDuration: duration, courseFee: fee} = course

console.log(name) // JavaScript
console.log(duration) // 3 months
console.log(fee) // 3000

/*
API is used to interact with backend. The data comes in JSON format. We can use fetch() to get the data from the API. The data comes in the form of an object. We can destructure the object to get the values.
*/

//{
//    "name": "Biswa",
//    "courseName": "JavaScript",
//    "price": "free"
//}


