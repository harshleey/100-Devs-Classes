//---Easy
//create a function that subtracts two numbers and alerts the difference

//create a function that divides three numbers and console logs the quotient

//create a function that multiplys three numbers and returns the product

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
let threes = (n1, n2, n3) => {
  let firstTwo = n1 + n2;
  console.log(firstTwo % n3);
}

threes(20, 10, 4)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
 let fours = (n1, n2, n3, n4) => {
   let firstTwo = n1 * n2;
   let addLastTwo = n3 + n4;
   let subLastTWo = n3 - n4;
   let product = n1 * n2 * n3;

   if(firstTwo > 100) {
     console.log(firstTwo +addLastTwo);
   } else if (firstTwo < 100) {
     console.log(firstTwo - subLastTWo);
   } else {
      console.log(product % n4);
   }
 }

 fours(10, 10, 30, 9)