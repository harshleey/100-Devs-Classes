//Write your pseduo code first! 
// Create a variable named celsius and keep 

// document.querySelector("#convert").addEventListener('click', convert);

function convert() {
  const celsius = document.querySelector("#temp").value;
 const fahrenheit = celsius * 9/5 + 32;
 document.querySelector("#placeToConvert").innerText = fahrenheit;
}