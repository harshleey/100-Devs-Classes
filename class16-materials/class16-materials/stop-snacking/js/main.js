//Create a function that grabs the number of snacks from the input and tells you to stop that many times

// PSEUDO CODE
// Grab the number of snacks from the inputted value  (say 20)
// Then tell the person snacking to stop snacking that amount of time

function help() {
  let snack = inputtedNum => {
    inputtedNum = document.querySelector('#input').value;
    for (i = 1; i <= inputtedNum; i++) {
      // document.querySelector('#stops').innerHTML += "Quit Snacking! ";
      console.log("Quit Snacking!")
    }
  }
}
