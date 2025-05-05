const userEmail = "hitesh@.ai"
if(userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user email")  
}

//Check if array is empty
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//Check if object is empty
const emtyobj = {}
if (Object.keys(emtyobj).length === 0) {
    console.log("Object is empty");
}


/* Falsy Values
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

   Truthy Values
   "0", 'false', " ", [], {}, function(){}, 

*/

/*
false == 0 // true
false == "" // true
false == null // false
false == undefined // false
false == NaN // false
 0 == '' // true
0 == null // false
*/

//Nullish Coalescing Operator (??): null undefined
 let val1;
 val1 = 5 ?? 10 // 5
 val1 = null ?? 10 // 10
 val1 = undefined ?? 10 // 10
 val1 = 0 ?? 10 // 0
 val1 = null ?? 10 ?? 20 //10 first value
 console.log();

//Teranry Operator
condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("More than 80")

