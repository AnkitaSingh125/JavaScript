//array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);

const myHeors = ["Ironman", "captain America"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(typeof myArr2);

// Array methods

myArr.push(7) //push method
// console.log(myArr);

myArr.pop() //remove last element
myArr.unshift(9)//it will add an element at the starting of array
// console.log(myArr);
myArr.shift()
// console.log(myArr.join()); //iy adds all elements of an array in a string

// console.log(myArr.includes(9));//we are asking is the array include this value or not in bollean
// console.log(myArr.indexOf(9));


// const newArray = myArr.join()
// console.log(newArray);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log(myArr);

const myn2 = myArr.splice(1, 3)//splice method manipulates the original array & it considers the last limit also.
console.log(myn2)
console.log("B", myArr);



