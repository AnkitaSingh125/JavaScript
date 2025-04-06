const user = {
    username:"hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`); //use of this keyword
    }
    
}
// user.welcomeMessage()
// user.username = "ankita"
// user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //will be undefined it works under object
// }
// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this); //will be undefined it works under object
// }
// chai()

//**********Arrow funtion*************
const chai = () => {
    let username = "hitesh"
    console.log(this.username); //will be undefined it works under object
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //implicit return

// const addTwo = (num1, num2) => (num1 + num2) //with parwithenthesis, with curly braces it will always need the return funtion

const addTwo = (num1, num2) =>({username: "ankita"}) //to return an object we need to use paranthesis

console.log(addTwo(2, 3)); //5
