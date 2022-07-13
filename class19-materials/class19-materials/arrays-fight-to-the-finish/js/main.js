//Create an array of movie titles. Loop through the array and each element to the h2.
let moviesTitle = ['Titanic', 'Infinity War', 'Civil War', 'Endgame'];

// for(let i = 0; i < moviesTitle.length; i++) {
//   document.querySelector("h2").innerHTML += `${moviesTitle[i]} <br>`;
// } 

//Create an array of numbers. Loop through the array and three to each number and replace the old number. 
let arrOfNum = [2, 5, 10, 67, 52, 9];
let i = 0;
while (i < arrOfNum.length) {
  console.log(arrOfNum[i] + 3);
  i++;
}


//Find the average of all the numbers from question three
let averageOfArray = arrOfNum.reduce((acc, current, index, array) => acc + current, 0) / arrOfNum.length;
console.log(averageOfArray);
