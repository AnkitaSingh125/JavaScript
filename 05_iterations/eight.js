const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curvalue) { //reduce used to provide a single value for a given array
//     console.log(`acc: ${acc} and curvalue: ${curvalue}`);
//     return acc + curvalue
// }, 0)

//Using arrow function

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "DS course",
        price: 2999,
    },
    {
        itemName: "AI course",
        price: 2999
    }
]

 const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0) //reduce used to provide a single value for a given array

 console.log(priceToPay);
 