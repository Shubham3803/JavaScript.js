class user{
  constructor(email, password){
    this.email = email;
    this.password = password
  }

  get password(){
    return this._password.toUpperCase()
  }

  set password(value){
    this._password = value.toUpperCase()
  }
}

const shubham = new user('Shubham.ai', '123')
console.log(shubham.password);
