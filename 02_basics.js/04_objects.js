// const tinderUser = new Object()


const tinderUser= {}

tinderUser.id ="123abc"
tinderUser.name ="shubham"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
  email:"shubahm@.com",
  fullName: {
    userFullName:{
      firstName: "shubham",
      LastName:"bhardwaj"
    }
  }
}


// console.log(regularUser.fullName.userFullName.LastName);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
  {
    id:1,
    email:"shubham@gmail.com"
  },
  {
    id:1,
    email:"shubham@gmail.com"
  },
  {
    id:1,
    email:"shubham@gmail.com"
  },
  {
    id:1,
    email:"shubham@gmail.com"
  }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

// Object de-structure and JSON API 

const course ={
  coursename :"js Hindi",
  price: "999",
  courseInstructure: "Shubham"
}

// course.courseInstructure

const{courseInstructure:instructure} = course

console.log(instructure);

const navbar =() => {

}
navbar(comapany = "shubham")

// {
//   "name":"shubham",
//   "coursename": "Js hindi",
//   "price": "free" 
// }

// [
//   {},
//   {},
//   {},
// ]