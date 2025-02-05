const userEmail = []

if (userEmail) {
  console.log("Got email");
} else {
  console.log("dont have emai");
}

// falsy value

// false , 0, -0, BigInt 0n, "", undefined, null, Nan

// truthy values 
// "0", 'false', " ", [], {}, fuunction(){}

if (userEmail.length === 0) {
 console.log("array is empty");
  
}

const emptyobj ={}
if (Object.keys(emptyobj).length === 0) {
  console.log("empty");
  
}