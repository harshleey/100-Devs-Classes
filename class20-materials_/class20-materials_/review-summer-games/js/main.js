//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let takers = array => {
  let product = array.reduce((acc, c) => acc * c);
  console.log(product)
}

let array = [2, 2, 9];
takers(array)