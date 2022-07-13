// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood;
favoriteFood = 'Rice';
console.log(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let movie;
movie = "Titanic";
console.log(movie[1]);
console.log(movie.charAt(1))


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
let takers = (n1, n2, n3) => {
  let product = (n1 / n2) * n3;
  console.log(product);
}

takers(2, 4, 6)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
let figure = num => Math.pow(num, 3);
console.log(figure(20))

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

let input = month => {
  let spring = 'March' || 'April' || 'May';
  let summer = 'June' && 'July' && 'August';
  let autumn = 'September' && 'October' && 'November';
  let winter = 'December' && 'January' && 'February';

  if (month === 'June' || 'July' || 'August') {
    return 'YAY';
  } else if (month === spring || month === autumn || month === winter) {
    return 'Boooo';
  }
}
console.log(input('July'))


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function fig(num) {
  for(let i = 1; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i)
    }
  }
}


fig(20)