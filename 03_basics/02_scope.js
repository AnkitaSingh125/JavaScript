// let a = 10
// const b = 20
// var c = 30 //Global scope variable
//{} - it is a scope

if(true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(a) //error: a is not defined
console.log(b) //error: b is not defined
console.log(c); //30

//nested scopes
function one(){
    const username = "John"

    function two(){
        const website = "youtube"
        log(username) 
    }
    //console.log(website); //error

    two() //will never be called
}
one();

//************Interesting *************// & Hoisting

addone(5)
function addone(num){
    return num + 1
}
//addone(5)- can be called before the function is defined

addtwo(5) //error: addtwo is not a function
//function expression
const addtwo = function(num){ //variable holding a function
    return num + 2
}
//addtwo(5)- cannot be called before the function is defined