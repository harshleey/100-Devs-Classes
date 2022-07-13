// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favoriteHoliday;
favoriteHoliday = 'Christmas'.toUpperCase()
console.log(favoriteHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let food = 'Spaghetti';
console.log(food.charAt(food.length - 3), food.charAt(food.length - 2), food.charAt(food.length - 1))

let slices = food.slice(-3);
console.log(slices)

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
let takers = (n1, n2, n3, n4, n5) => {
  let difference = 100 - n1 - n2 - n3 - n4 - n5;
  // let result = 100 - sum;
  console.log(Math.abs(difference));
}

takers(2, 30, 39.9, 1, 5)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
let figures = (n1, n2, n3) => {
  let max = Math.max(n1, n2, n3);
  let min = Math.min(n1, n2, n3);
  console.log(max);
  console.log(min);
}

figures(20, 10, 5);


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
let num = [2, 4, 9, 0, 1, 6, 6, 4, 1 ]
for (let i = 0; i < num.length; i++) {
  console.log(Math.floor(Math.random() * i));
  console.log(Math.floor(Math.random() * num[i]));
}

function headOrTail() {
  let result = Math.random()
  if (result < 0.5) {
    return 'heads'
  } else {
    return 'tails'
  }
}




//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
let game = num => {
  for(i = 0; i <= num; i++) {
    let result = headOrTail()
    console.log(result);
  }
}

game(10);