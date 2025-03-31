function sayMyName(){ //function definition
    console.log("Hello This is a sunction");
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
console.log(login("John")); //function call with arguments
