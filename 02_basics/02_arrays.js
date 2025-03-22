const marvel_heros = ["thor", "ironman", "spiderman"]
// console.log(marvel_heros);

const dc_heros = ["superman", "flash", "batman"]
// console.log(dc_heros);


//push function will manipulate the existing array
// marvel_heros.push(dc_heros)//it will take the another array elements as a single element

//concat method will return a new array
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator ...
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

//flat method
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //it will bring all the array elements into the single layer, just enter the depth
console.log(real_another_array);

//Array conversion
console.log(Array.isArray("Hitesh")); //asking
console.log(Array.from("Hitesh"));

console.log(Array.from({name: "hitesh"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



