// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let agreeWithOpinion;
agreeWithOpinion = true;
console.log(agreeWithOpinion);
// Declare a variable, reassign it to your favorite color, and console log the value
let favoriteColor;
favoriteColor = 'black';
console.log(favoriteColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
let figures = (n1, n2, n3, n4) => {
  let sum = n1 + n2 + n3;
  let result = sum / n4;
  return result;
}

console.log(figures(2, 4, 6, 8));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
let numbers = (n1, n2) => console.log(Math.pow(n1, n2));
numbers(3, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
let boolean = decision => true ? console.log('True') : console.log('false');
boolean(true);
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
let takers = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
      console.log(`${i}  FizzBuzz`)
    } else if (i % 3 === 0) {
      console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}  Buzz`);
    } else {
      console.log(i)
    }
  }
}

takers(50)