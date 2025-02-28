const user = {
  username: "shubham",
  loginCOunt: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log("got user details for database");
    // console.log(`username: ${this.username}`);
    console.log(this);
    
    
  }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);


function use(username, loginCOunt, isuserloogedin){
  this.username = username;
  this.loginCOunt = loginCOunt;
  this.isuserloogedin = isuserloogedin

  this.greeting = function(){
    console.log(`welcome ${this.username}`);
    
  }

return this

}
const userOne = new use('shubham', 12, true)
const userTwo = new use('shubham', 12, true)

console.log(userOne.constructor);
// console.log(userTwo);
