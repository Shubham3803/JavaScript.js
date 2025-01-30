

function saymyName(){
  console.log("S");
console.log("h");
console.log("u");
console.log("b");
console.log("h");
console.log("a");
console.log("m");
}

// saymyName()

// function addTwoNumber(number1 ,number2){
//   console.log(number1 + number2);
// }

function addTwoNumber(number1 ,number2){

  // let result = number1 + number2
  // return result
  return number1 + number2
}
const result = addTwoNumber(3,5)
// console.log("result:" ,result);


function logInUserMessage(username = "monu"){
  if(username === undefined){
    console.log("enter a username ")
    return
  }
  return`${username} just Loged In`
}

// console.log(logInUserMessage("Shubham"))
// console.log(logInUserMessage("shubham"))

function calculateCartPrice(...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user ={
  username: "shubham",
  prices: 199
}

function handldeObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  
}

// handldeObject(user)
handldeObject({
  username:"shubham",
  price: 399
})


const myNewArray =[200, 400, 100, 600]
function returnsecondvalue(getarray){
  return getarray[3]
}
// console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200, 400, 100, 600]));
