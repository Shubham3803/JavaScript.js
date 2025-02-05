/* Primitive 
  7 Types 

  string
  Number 
  Boolearn
  Null
  undefine
  Symbol
  BigInt  */

  const score = 100
  const scoreValue = 100.3

  const isLoggedIn = false
  const outsideTemp = null
  let userEmail;

  const id =Symbol('123')
  const anotherId = Symbol('123')

  console.log(id === anotherId);
  
  const bigNumber = 3465164413954145544n

 /* Reference (Non Primitive)

  Array
  Object
  Functions */

  const heros =["Superman", "batman", "spiderman"]  // Called Array
 
 let myObj = {
    name: "shubham",
    age: 24,
  }                               // called Object

 const myFunction = function(){
    console.log("hello World");
}

console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++

// stack  (Primitive),  heap (non-Premitive)

let myYoutubename = "shubhambhardwaj"

let anotherName = myYoutubename
anotherName = "code"

console.log(myYoutubename);
console.log(anotherName);

let user ={
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = user

userTwo.email = "shubham@Google.com"
console.log(user.email);
console.log(userTwo.email) ;
