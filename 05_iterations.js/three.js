//  for of loops 

const arr = [1,2,3,4,5]

for (const num of arr) {
  // console.log(num);
  
}

const greetings = "hello world"
for (const greet of greetings) {
  // console.log(`each char is ${greet}`);
  
}

// maps

const map = new Map()
map.set('IN', "india")
map.set('usa', "united state of india ")
map.set('fr', "france")

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ':-', value);
}

const myobject = {
  'game1': 'NFS',
  'game2': 'spiderman'
}

for (const key of myobject) {
  console.log(myobject);
  
}