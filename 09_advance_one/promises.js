const promiseOne = new Promise(function(resolve, reject){
  // 
  // DB calls, crryptography, network call
  setTimeout(function(){
    console.log('async task is compleated')
    resolve()
  },1000)
})

// promiseOne.then(function(){
//   console.log('promise consumed');
  
// })

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("task 2");
    resolve()
  }, 1000)


}).then(function(){
  // console.log("task 2 solve");
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "shubham", email: "shubham.@gmail.com"})

  },1000)
})

promiseThree.then(function(user){
  console.log(user.email);
})


// method 1 using .then, .catch, .finally

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username:"shubham Bhardwaj", Password: "shubham123"})
    } else{
        reject('ERROR:Something went wrong')
    }
    
  },1000)

})

promiseFour.then((user) => {
  console.log(user);
  return user.username
  
})
.then(function(username){
  console.log(username);
  
})
.catch(function(error){
  console.log(error);
  
})
.finally(()=>console.log("task solve"))


//  method 2 using async 


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if (!error) {
        resolve({username:"Javascript", password: "js123"})
    } else {
        reject('ERROR: js went wrong')
    }
  }, 1000)
})

async function consumePromiseFive (){
 try {
  const response = await promiseFive
  console.log(response);
 } catch (error) {
  console.log(error);
  
 }
  
}
consumePromiseFive()

//  try catch formate 

// async function getAllUsers(){
//   try {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/users')    
//   const data = await responce.json()
//   console.log(data);
//   } catch (error) {
//     console.log("error:", error);
    
//   }
  
// }
// getAllUsers()


// same task but using then catch method

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    
})
.catch(function(error){
    console.log(error);
    
})