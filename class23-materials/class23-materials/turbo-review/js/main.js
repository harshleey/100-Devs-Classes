// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "This is all that it is"
console.log(sentence.includes ('?'))
//   console.log("TThis is a question!!")
// } else {
//   console.log('It is not a question')
// }

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiple = "Math jr.Dev, English jr.Dev, Physics, Chemistry";

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let randomNum = Math.random()
// let num;
function myBot() {
  if (randomNum < .33) {
    return 'rock'
  }
  else if (randomNum < .66) {
    return 'paper'
  }
  else {
    return 'scissors'
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function myGame(rpc) {
  if(rpc === 'rock' && myBot === '') {

  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function choice(array) {
  for(let i = 0; i < array.length; i++) {
    return myGame(rpc)
  }
}