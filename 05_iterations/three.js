//for of

//["","",""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello World!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

//Maps 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);
for (const key of map) {
    console.log(key);
}

//Array Destructuring
for (const [key, value] of map) {
    console.log(key, ":-", value);
}

//Fro object
const myObjects = {
    'game1' : 'NFS',
    'game2' : 'GTA',
}

// for (const [key, value] of myObject) {
    
// } it will not work