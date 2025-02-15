const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = myNumbers.map( (num) => { return num +10})

//  chaning methods 

const newnums = myNumbers.map( (num) => num * 10)
.map( (num) => num + 1)

console.log(newnums);



