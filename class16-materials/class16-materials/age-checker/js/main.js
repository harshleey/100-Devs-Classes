//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
document.querySelector("#check").addEventListener("click", check)
let result = document.querySelector("p")
function check() {
  let age = document.querySelector("#danceDanceRevolution").value
  if(age < 16) {
    result.innerText = "they cannot drive";
  } else if(age < 18) {
    result.innerText = "they can't hate from outside the club, because they can't even get in";
  } else if(age < 21) {
    result.innerText = "they can not drink";
  } else if (age < 25) {
    result.innerText = "they can not rent cars affordably";
  } else if (age < 30) {
    result.innerText = "they can not rent fancy cars affordably";
  } else {
    result.innerText = "there is nothing left to look forward too";
  }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
