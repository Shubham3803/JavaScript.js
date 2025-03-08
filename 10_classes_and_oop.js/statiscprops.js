class User {
  constructor(userName){
    this.userName = userName
  }

  logMe(){
    console.log(`userName: ${this.userName}`);
    
  }

  static createId(){
    return `123`
  }
}

const shubham =new User('shubham')
// console.log(shubham.createId())

class Teacher extends User {
  constructor(userName,email){
    super(userName)
    this.email=email
  }
}

const iphone = new Teacher('iphone', 'i@phone.com')
console.log(iphone.createId());
// iphone.logMe()
