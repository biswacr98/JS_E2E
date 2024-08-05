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

// Combine Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2} // This is not recommended.

console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2) //Object.assign() copies the values of all enumerable own properties from one or more source objects to a target object. It returns the target object. Here target object is obj1. So, obj1 is modified.

console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj5 = Object.assign({}, obj1, obj2) // The difference between this and the above is that this does not modify the original object. It creates a new object and assigns the values of obj1 and obj2 to it.

console.log(obj4)

const obj6 = {...obj1, ...obj2} // This is the same as the above. This is a shorthand way of writing the above. This is the latest way of combining objects.

console.log(obj6) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// While we interact with database, the value comes like this from the database:

const databaseUsers = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "i@gmail.com"
    },
    {
        id:3,
        email: "j@gmail.com"
    },
]

console.log(databaseUsers[1].email) //i@gmail.com

console.log(user)

console.log(Object.keys(user)) // [ 'id', 'name', 'isLoggedIn' ]. This returns an array of keys of the object.

console.log(Object.values(user)) // [ '123abc', 'Biswa', true ]. This returns an array of values of the object.

console.log(Object.entries(user)) // [ [ 'id', '123abc' ], [ 'name', 'Biswa' ], [ 'isLoggedIn', true ] ]. This returns an array of arrays. Each array contains a key-value pair of the object.

console.log(user.hasOwnProperty("id")) // true. This checks if the object has the key "id".˛
