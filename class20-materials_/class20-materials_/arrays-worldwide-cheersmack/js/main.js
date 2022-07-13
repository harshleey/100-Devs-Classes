//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

let result = [];
let takers = num => {
  for (let i = 1; i <= num; i++) {
    console.log(result.push(i))
  }
}

takers(20);
console.log(result)