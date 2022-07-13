//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
 
let newArray = [];
let takers = array => {
  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      // console.log(array[i]);
       newArray.push(array[i])
    }
  }
}

let array = [2, 5, 20, 24, 10, 19, 25];
takers(array);
console.log(newArray)