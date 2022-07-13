// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
let takers = array => {
  if(array[0] < array[array.length - 1]) {
    console.log('HI')
  } else if (array[0] > array[array.length - 1]) {
    console.log('BYE')
  } else {
    console.log('We close in an hour')
  }
}

let array = [10, 28, 30, 10, 2];
takers(array);