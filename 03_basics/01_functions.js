function sayMyName(){ //function definition
    //console.log("Hello This is a sunction");
}

sayMyName(); //'sayMyName' function reference with () this this function call

function addTwoNumbers(number1, number2){ //function with parameters
    // console.log(number1 + number2);
    //const result = number1 + number2; //storing the value in a variable
    return number1 + number2; //returning the value
}
const result =  addTwoNumbers(3, 4); //function call with arguments
function login(username){
    return`${username} is logged in`;
}
//console.log(login("John")); //function call with arguments


function calculateCartPrice(val1, val2, ...num1){ 
    return num1
    // let total = 0; 
    // for(let i = 0; i < num1.length; i++){
    //     total += num1[i];
    // }
    // console.log(total);
}
//console.log(calculateCartPrice(200, 400, 500, 2000));
 
const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username: "Sam",
    price: 499
})

const myNewArray = [1, 2, 3, 4]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray)); //function call with array
console.log(returnSecondValue([1, 2, 5, 7]));
