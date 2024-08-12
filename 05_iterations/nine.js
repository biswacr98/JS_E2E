/*
reduce is a powerful function that allows you to reduce an array to a single value. It is a very common operation in programming. You can use it to sum all the numbers in an array, multiply them, etc. accumulator is the value that you are reducing the array to. currentValue is the current value in the array. initialValue is the initial value of the accumulator. If you do not provide an initialValue, the first element in the array will be used as the initialValue. If the array is empty and you do not provide an initialValue, you will get an error. If the array has only one element and you do not provide an initialValue, the first element will be returned. If the array is empty and you provide an initialValue, the initialValue will be returned. If the array has only one element and you provide an initialValue, the initialValue will be returned.
*/

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator}, current value: ${currentValue}`);

    return accumulator + currentValue
}, 3)

console.log(myTotal) // 9

const myTotalArrow = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 3)

console.log(myTotalArrow) // 9

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "React Course",
        price: 3999
    },
    {
        itemName: "Node Course",
        price: 4999
    },
    {
        itemName: "MongoDB Course",
        price: 1999
    },
    {
        itemName: "Express Course",
        price: 2999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay) // 16995;
