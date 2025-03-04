// let myName = "shubham     "
// let myName2 = "bhardwaj     "
// console.log(myName.truelength);


let myHeros = ['thor', 'spiderman']





let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',

  grtspiderPower:function(){
    console.log(`spiderman power is ${this.spiderman}`);
    
  }
}

Object.prototype.shubham =function(){
  console.log(`shubham is present in all object`);
  
}


Array.prototype.hyShubham = function(){
  console.log(`shubham says hello`);
  
}


// heroPower.shubham()
// myHeros.shubham()
// myHeros.hyShubham()
// heroPower.hyShubham()


//  inheritance 

const user ={
  name:"shubham",
  email:`shubham@gmail.com`
}

const teacher = {
  makeVideo: true
}

const TeachingSupport ={
  isAvailable: false
}

const TASupport = {
  makeAssignment : `ja assignment`,
  fullTime: true,
  __proto__:TeachingSupport
}


teacher.__proto__ =user

// modern Sintax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = 'chaiaurcode       '

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(` true length is ${this.trim().length}`);
  
}


anotherUsername.trueLength()
