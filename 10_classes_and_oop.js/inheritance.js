class User {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
    
  }

}

class teacher extends User{
  constructor(username, email, password){
    
    super(username)
    
    this.email = email;
    this.password = password
  }


  addCourses(){
    console.log(`Anew courses was added by ${this.username}`);
    
  }
}



const chai =new teacher('chai', 'chai@.com', '123')
chai.addCourses()
const masalachai = new User('masalaChai')





// cant understand properly need to watch it again 