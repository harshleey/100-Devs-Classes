//--- Easy
//create a variable and assign it a number
let num = 20;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input
let inputted = document.querySelector('#danceDanceRevolution').value;
//add 25 to that number
inputted += 25;
//alert that number
console.log(inputted);
//--- Hard
//create a variable that holds the h1
let holdingBigH = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables
holdingBigH.addEventListener('click', holds);
function holds() {
  console.log(num + inputted);
}