//singleton , whenever an object is created using constructors then only it is singleton, otherwise it is not
//Object.create,, it is single using constructor

//object literal is not singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    [mySym]: "mykey1", //to access symbol in an object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Accesing value of objects
// console.log(JsUser.email); //using dot notation
// console.log(JsUser["email"]); //using bracket notation

//access that symbol
// console.log(JsUser[mySym]);

//to override the value of object
JsUser.email = "hitesh@chatgpt.com"

//to lock values of object
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com" //this will not work
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting); //accessing function in object, but this stattement will only show the function, it will not call the function output 
console.log(JsUser.greeting()); //this will call the function and show the output

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this keyword is used to access the same object properties
}
console.log(JsUser.greetingTwo());
