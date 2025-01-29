

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
console.log(logInUserMessage("shubham"))