// *Variables*
// Create a variable and console log the value
let myName = "Ashley";
console.log(myName)

// Create a variable, add 10 to it, and alert the value
let num = 20
console.log(num += 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(n1, n2, n3, n4) {
  let deduction = n1 - n2 - n3 - n4;
  console.log(deduction)
}
sub(1, 6, 200, 500)
// Create a function that divides one number by another and returns the remainder
let singers = (bey, riri) => bey % riri;
console.log(singers(30, 4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let animals = (zebra, goat) => (zebra + goat) > 50 ? "Jumanji" : "Stale";
console.log(animals(20, 24))
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
let times = (n1, n2, n3) => (n1 * n2 * n3) % 3 === 0 ? "ZEBRA" : "NOPE"
console.log(times(20, 3, 10))