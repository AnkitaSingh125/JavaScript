const name = "ankita"
const repoCount = 50
// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ankita');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// const newString = gameName.substring(0, 4) //Substring will ignore the negative indexing and will only return accourding to the positive indexing
// console.log(newString);

// const anotherString = gameName.slice(-4)//Slice method can take input in negative indexing
// console.log(anotherString);

const newStringOne = "  Ankita   "
console.log(newStringOne);

console.log(newStringOne.trim()) //trim function removes the starting and ending space

const url = "https://ankita.com/ankita%20singh" //% shows in a browser when there is a space between like - ankita singh converted into ankita%20singh

console.log(url.replace('%20', '-'));

console.log(url.includes('tashu')); //includes method returns true when the character exists in the variable
