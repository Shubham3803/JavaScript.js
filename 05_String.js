const name = "shusbham"
const name2 = "bhardwaj"

console.log(name + name2);
console.log(name + name2 + "Value");

console.log(`Hello my name is ${name} nad surname is ${name2}`);

const gamename = new String('shubham-b')

console.log(gamename [0] ); 
console.log(gamename.__proto__ ); 


console.log(gamename.length ); 
console.log(gamename.toUpperCase() ); 
console.log(gamename.charAt(5) ); 
console.log(gamename.indexOf('h') ); 

const newString = gamename.substring(0,4)
console.log(newString);

const anotherstring =gamename.slice(-8, 4)
console.log(anotherstring);

const newstringone  = "    shubham    "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://shubham.com/shubham%20bharwdaj"
console.log( url.replace('%20', '-'));

console.log( url.includes('shubham'))



 


