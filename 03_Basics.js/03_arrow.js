const user ={
  username: "shubham",
  price: 999,

  welcomemessage: function name(params) {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
    
  }
    
  }


  // user.welcomemessage()
  // user.username = "Sam"
  // user.welcomemessage()

  // console.log(this);

  // function chai() {
  //   console.log(this);
    
  // }
  // chai()

  const chai = ()=>{
    let username = "Shubham"
    console.log(this);
  }
  // chai()


//  const addtwo = (num1, num2) => {
//     return num1 + num2
//   }


//  const addtwo = (num1, num2) =>  num1 + num2
 const addtwo = (num1, num2) =>  ({username:"shubham"})
   
console.log(addtwo(3,4));



// const myArray = [2,5,6,7]
// myArray()
