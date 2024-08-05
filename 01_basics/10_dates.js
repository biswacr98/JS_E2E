/*
Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

Temporal is a new ECMAScript proposal that aims to bring a modern date and time API to JavaScript. It is a global object that provides a standard way to work with dates and times.
*/

let myDate = new Date()
console.log(myDate) //2024-08-05T11:08:41.799Z. It returns the current date and time.

console.log(myDate.toString()) // Mon Aug 05 2024 16:39:22 GMT+0530 (India Standard Time). It returns the date and time in a human-readable format.

console.log(myDate.toDateString()) // Mon Aug 05 2024. It returns the date in a human-readable format.

console.log(myDate.toISOString()) // 2024-08-05T11:11:00.225Z. It returns the date and time in ISO format.

console.log(myDate.toJSON()) // 2024-08-05T11:11:00.225Z. It returns the date and time in JSON format.

console.log(myDate.toLocaleDateString()) // 8/5/2024. It returns the date in a human-readable format.

console.log(myDate.toLocaleString()) // 8/5/2024, 4:41:00 PM. It returns the date and time in a human-readable format.

console.log(typeof myDate) // object. It is an object.

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate) // 2023-01-22T18:30:00.000Z. It returns the specified date and time.
console.log(myCreatedDate.toDateString()) // Mon Jan 23 2023. It returns the specified date in a human-readable format.

let myNewCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myNewCreatedDate.toLocaleString()) // 1/23/2023, 5:03:00 AM. It returns the specified date and time in a human-readable format.

let anotherDate = new Date("2023-01-23")
console.log(anotherDate.toLocaleString()) // 1/23/2023, 5:30:00 AM. It returns the specified date and time in a human-readable format.

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1722856769363. It returns the number of milliseconds since 1 January 1970 UTC.

console.log(myCreatedDate.getTime()) // 1674412200000. It returns the number of milliseconds since 1 January 1970 UTC.

console.log(Math.floor(Date.now()/1000)) // 1722856858. It returns the number of seconds since 1 January 1970 UTC.

let newDate = new Date()
console.log(newDate) // 2024-08-05T11:11:00.225Z. It returns the current date and time.
console.log(newDate.getMonth()) // 7. It returns the month of the specified date according to local time. The value returned by getMonth() is an integer between 0 and 11. 0 corresponds to January, 1 to February, and so on.

console.log(newDate.getDay()) // 1. It returns the day of the week for the specified date according to local time. The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    timeZone: 'UTC'
})
