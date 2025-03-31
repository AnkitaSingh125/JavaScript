// const tinderUser = new Object() // Singleton object
const tinderUser = {} //Non-Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname:{
            firstName: "hitesh",
            lastName: "Chaudhary",
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);
// const obj4 = Object.assign({}, obj1, obj2)
const obj4 = Object.assign( obj1, obj2) //(target, source)
// console.log(("Output of object4"));
// console.log(obj4);

// console.log(("Output of object1"));
// console.log(obj1);
// console.log((obj1 === obj4)); // true

const obj5 = {...obj1, ...obj2} //spread operator
// console.log(("Output of object3"));
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //to get the keys of object
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if the object has the property


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}
//'course.courseInstructor' it is a standard way to access values

const {courseInstructor: instructor} = course //destructuring and defining new name

//console.log(courseInstructor);
console.log(instructor);

/**************API *******************
  JSON- For JavaScript Object Notation, the output of backend is in JSON FORMAT
*/

{
    "name": "hitesh",
    "course": "js in hindi",
    "price": "free"
}

[ // Json can be in array format
    {},
    {},
    {}
]