//  singleton

//  object literals way to write a object 

// Object.create

const mysymble =Symbol("key1")
const mysymble2 = Symbol("shubham24")

const Jsuder ={
  name: "shubham",
  "full name": "shubham Bhardwaj",
  [mysymble]: "key1",
  age:24,
  [mysymble2]: "shubham24",
  location:"ghaziabad",
  email:"shbham@google.com",
  isLoggedIn: false,
  lastLoginDays:["monday", "saturday"]
}

// console.log(Jsuder.email);
// console.log(Jsuder["email"]);
// console.log(Jsuder["full name"]);
// console.log(Jsuder[mysymble]);

Jsuder.email ="shubham@chatgpt.com"
// Object.freeze(Jsuder)
Jsuder.email ="shubham123"
// console.log(Jsuder);

Jsuder.greeting = function(){
  console.log("hlo user");
}


Jsuder.greeting2 = function(){
  console.log(`hlo user, ${this.name}`);
}

console.log(Jsuder.greeting());
console.log(Jsuder.greeting2());

console.log(Jsuder.isLoggedIn);
