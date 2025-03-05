// ES6 

class user {
  constructor(username, email, password){
    this.username= username;
    this.email = email;
    this.password = password
  }

  encryptpassword(){
    return `${this.password}abc`
  }
  changeUserName(){
    return `${this.username.toUpperCase()}`
  }
}

const chai = new user('chai', 'chai@.com', '123')
console.log(chai.encryptpassword());
console.log(chai.changeUserName());


// behind the scene

function user(username, email, password){
  this.username= username;
    this.email = email;
    this.password = password
}

user.prototype.encryptpassword = function(){
  return `${this.password}abc`
}
user.prototype.changeUserName = function(){
  return `${this.username.toUpperCase()}`
}

const tea = new user('tea', 'chai@.com', '123')
console.log(tea.encryptpassword());
console.log(tea.changeUserName());