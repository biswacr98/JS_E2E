const coding = ["js", "cpp", "py", "rb", "swift"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item // this will not return anything.
} )

console.log(values) //forEach() does not return anything, it returns undefined

/*
filter method creates a new array with all elements that pass the test implemented by the provided function. The filter method does not change the original array. The filter method calls the provided function once for each element in the array. The filter method does not execute the function for array elements without values.
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4) // this will return an array with elements greater than 4. return is implicit here.
console.log(newNums) // [5, 6, 7, 8, 9, 10]

const newNums2 = myNums.filter( (num) => {
    num > 4
}) // this will return an empty array because the function does not return anything. return should be explicitly mentioned if we are using curly braces.

console.log(newNums2) // []

const newNums3 = myNums.filter( (num) => {
    return num > 4
}) // this will return an array with elements greater than 4. return is explicit here.

console.log(newNums3) // [5, 6, 7, 8, 9, 10]

const newNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const anotherNumArray = []

newNumArray.forEach( (num) => {
    if (num > 4) {
        anotherNumArray.push(num)
    }
})

console.log(anotherNumArray) // [5, 6, 7, 8, 9, 10]

const books = [
    {
        title: "Book One", genre: "Fiction", publish: 1981, edition: 2004
    },
    {
        title: "Book Two", genre: "Non-Fiction", publish: 1999, edition: 2005
    },
    {
        title: "Book Three", genre: "History", publish: 2001, edition: 2006
    },
    {
        title: "Book Four", genre: "Non-Fiction", publish: 2004, edition: 2007
    },
    {
        title: "Book Five", genre: "Science", publish: 2007, edition: 2008
    },
    {
        title: "Book Six", genre: "Fiction", publish: 2009, edition: 2010
    },
    {
        title: "Book Seven", genre: "Fiction", publish: 2011, edition: 2012
    },
    {
        title: "Book Eight", genre: "Science", publish: 2013, edition: 2014
    },
    {
        title: "Book Nine", genre: "History", publish: 2015, edition: 2016
    },
    {
        title: "Book Ten", genre: "Fiction", publish: 2017, edition: 2018
    },
];

const historyBooks = books.filter( (book) =>  book.genre === "History")

console.log(historyBooks);

const booksPublishedAfter2000 = books.filter( (book) => book.publish > 2000)

console.log(booksPublishedAfter2000);

const booksPublishedAfter2007AndFiction = books.filter( (book) => book.publish > 2007 && book.genre === "Fiction")

console.log(booksPublishedAfter2007AndFiction);
