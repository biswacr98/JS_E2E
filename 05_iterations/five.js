/*
foreach loop is used to iterate over the elements of an array. Syntax: array.forEach(function(element) { // code block }). The function is executed for each element of the array. The function is called with each element of the array. The function is called with three arguments: the value of the element, the index of the element, and the array object itself. The function is called for each element of the array.
*/

const coding = ["js", "cpp", "py", "rb", "swift"]

coding.forEach(function(item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, array) => {
    console.log(item, index, array);
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
    {
        languageName: "Swift",
        languageFileName: "swift"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName, item.languageFileName);
});
