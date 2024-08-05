/*
Here, we'll talk about Object Constructors. We can create Singleton objects using Object Constructors. Singleton means that when we create objects using constructor, it creates a single instance of that object. This is not the case with object literals. Object literals do not create a single instance of the object. They create a new instance every time they are called.
*/

const user = new Object() // This is a Singleton object created using Object Constructor.

console.log(user) // {}. Empty object

user.id = "123abc"
user.name = "Biswa"
user.isLoggedIn = true

console.log(user) // { id: '123abc', name: 'Biswa', isLoggedIn: true }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "John",
            lastname: "Doe"
        }
    }
}

console.log(regularUser.fullname) // { userfullname: { firstname: 'John', lastname: 'Doe' } }
console.log(regularUser.fullname.userfullname) // { firstname: 'John', lastname: 'Doe' }
console.log(regularUser.fullname.userfullname.firstname) // John
