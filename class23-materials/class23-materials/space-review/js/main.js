//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let num = [2, 10, 28, 40, 50] 
num.reduce((acc, c) => {
  acc + c
}, 0)

console.log(num)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function myArray(fig) {
  return fig.map(element => element ** 2)
}

//Create a function that takes string
//Print the reverse of that string to the console
function takes(str) {
  
    return str.split('').reverse().join('')
}
  console.log(takes('marriage'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function takers(str) {
  // let reverseStr = string.split('').reverse().join('');
  if(takes(str) === str) {
    console.log(str)
  }
}

takers('racecar')