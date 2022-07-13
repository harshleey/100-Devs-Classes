// *Variables*
// Declare a variable, assign it a value, and alert the value

// Create a variable, divide it by 10, and console log the value

// *Functions* 
// Create a function that multiplies 3 numbers and alerts the product

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
let equation = (n1, n2, n3, n4) => {
  let firstTwo = n1 + n2;
  let lastTwo = n3 + n4;
  console.log(firstTwo - lastTwo);
};
equation(2, 5, 20, 11);
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
let threes = (n1, n2, n3) =>  {
  let firstNum = 100;
  let sum = (firstNum + n1 - n2) / n3;
  console.log(sum)
  if (sum > 25) {
    console.log("WE HAVE A WINNER");
  } else {
    console.log("OOPS")
  };
}

threes(200, 10, 10)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
let time = day => {
  day = day.toLowerCase();
  if (day === "saturday" || day === "sunday") {
    console.log("weekday")
  } else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
    console.log("Week day")
  } else {
    console.log("Try again!")
  }
}

time("Monday")


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
// let i = 1;
let takeNum = n1 => {
  for(i = 1; i <= n1; i+=3) {
    // console.log(i);
    // i++;
    // if(i % 2 === 1) {
      console.log(i)
    // }
  };
}

  takeNum(20);
    
