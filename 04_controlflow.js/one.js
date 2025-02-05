// if 


const isuserloogedin =true
const temperature = 41

// if (temperature <50) {
//   console.log("less then 50");
// } else {
//   console.log("temperature is grater then 50");
// }


// if ( 2 != 3 ) {
//   console.log("execuated");
// }

// const score =200
// if (score > 100) {
//   const power = "fly"
//   console.log(`user power: ${power}`);
  
// }
// console.log(`user power: ${power}`);


// const balance = 1000
// if (balance > 500) console.log("test");   do not use this method 

// if (balance < 500) {
//   console.log("less then 500");
// } else if(balance <750) {
//   console.log("less then 750");
// } else if (balance <900) {
//   console.log("less then 900 ");
// } else {
//   console.log("less then 1200");
// }


const userloggedIn = true
const debitcard = true
const loggedinfromgoogle =false
const loggedinfromemail =true

if (userloggedIn && debitcard) {
  console.log("allow to buy course");
}

if (loggedinfromgoogle || loggedinfromemail) {
  console.log("user Logged In ");
  
}