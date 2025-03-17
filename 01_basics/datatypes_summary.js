//JavaScrpit is a dynamically typed language language

/*Primitive datatypes-
 7 types- String, Number, Boolean, BigInt, null, undefined, Symbol
*/

/* Non-Primitive datatypes-
 3 types- Arrays, Objects, functions
 */

 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId);
 
 const bigNumber = 23143546768n

 const heros = ["shaktiman", "nagraj", "doga"];
 let myobj = {
    name: "Ankita",
    age: 18
 }

 const myFunction = function(){
    console.log("Hello World");
 }
 console.log(typeof bigNumber);
 console.log(typeof myFunction);
 console.log(typeof heros);
 
 //*******************************************

 // Stack(primitive), Heap(Non-Primitive)
 