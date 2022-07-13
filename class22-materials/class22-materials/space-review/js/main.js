//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let array = [2, 4, 20, 10, 3, 9];
let newArray = [];
let sum = 0;
let result = array.reduce((acc, c) => acc + c, 0);
console.log(result);

// USING LOOP
for (let i = 0; i < array.length; i++) {
  sum += array[i]
}

console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function input(arr) {
  for (let i = 0; i < arr.length; i++) {
   newArray.push(arr[i] ** 2)
  }
}
input(array)
let reversed = newArray.reverse();
console.log(newArray)

//Create a function that takes string
//Print the reverse of that string to the console
let takers = word => {
  let reversed = letter.split('').reverse().join("");
  console.log(reversed)
}
let letter = "Situation";
takers(letter)


//Create a function that takes in a string
//Alert if the string is a palindrome or not
// A palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.
let word = 'Madam'.toLowerCase()

let palindrome = word => {
  let reversal = word.split('').reverse().join('');
  if (reversal === word ) {
    console.log(word)
  } else {
    console.log('Nope')
  }
}

palindrome(word)


