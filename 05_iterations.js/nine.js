//  reduce method

const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} acc currval: ${currval}`);
  
//   return acc + currval
// }, 3)

const mytotal = myNums.reduce( (acc, curr) => acc+curr ,0)

console.log(mytotal);

const shoppingcart =[
  {
    itemname: "js course",
    price: 2999
  },
  {
    itemname: " mobile devcourse",
    price: 5999
  },
  {
    itemname: "data science course",
    price: 12999
  }
]

const priceToPay = shoppingcart.reduce((acc, items) => acc+items.price, 0)
console.log(priceToPay);
