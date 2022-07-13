//Write your pseduo code first! 

// Create a function that runs a code when the convert button is clicked or automatically as it is inputted
// Store the celsius input into a variable
// Store the fahrenheit equation into a variable
// Make the result show up in the webpage
function convert() {
  let celsius = document.querySelector("#input").value;
  let fahrenheit = celsius * 9/5 + 32;
  querySelector("#convertHere").innerText = fahrenheit;
}
