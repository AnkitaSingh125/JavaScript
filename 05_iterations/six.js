//const coding = ["js", "ruby", "java", "pyhton", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item); 
//     return item; //still it will not return anything
// })
// console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, ,6 ,7 ,8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4) 

//If you want ot open scope tehn
//  const newNums = myNums.filter( (num) => {
//     return num > 4
//  })

const newNums = []

myNums.forEach( (nums) => {
    if(nums > 4){
        newNums.push(nums)
    }
})
//console.log(newNums); // [5, 6, 7, 8, 9, 10]

const Books = [
    {title: 'Book One', genre: 'Fiction', published: 1999, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', published: 2000, edition: 2005},
    {title: 'Book Three', genre: 'History', published: 2001, edition: 2006},
    {title: 'Book Four', genre: 'Science', published: 2002, edition: 2007},
    {title: 'Book Five', genre: 'History', published: 2003, edition: 2008},
    {title: 'Book Six', genre: 'Fiction', published: 2004, edition: 2009},
    {title: 'Book Seven', genre: 'Non-Fiction', published: 2005, edition: 2010},
];

//const userBooks = Books.filter((bk) => bk.genre === 'History')

const userBooks = Books.filter((bk) => { 
    return bk.published >= 2000 && bk.genre === 'History'
})

console.log(userBooks);


