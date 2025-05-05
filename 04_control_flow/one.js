// <, <=, >, >=, ==, ===, !=, !==
//If
const isUserLoggedIn = true
const temperature = 40
if(temperature < 50){
    console.log("less than 50");
} else{
    console.log("greater than 50");   
}
console.log();

//One line execution

const balance = 1000
if(balance > 500) console.log(test); //use semicolon

//Nesting
// if(balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// }
//  else {
//     console.log("Less than 1200");  
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course"); 
}

if (loggedInFromGoogle|| loggedInFromEmail){
    console.log("User logged in"); 
}