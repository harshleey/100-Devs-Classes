//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Suits', 'Friends', 'How i met your mother', 'The office', 'The fresh prince of BelAir']
for (let i = 0; i < tvShows.length; i++) {
  console.log(tvShows[i]);
}

// tvShows.forEach(show => console.log(show))
tvShows.forEach(show => console.log(show))
//Create and array of numbers
let figures = [2, 10, 49, 35, 23, 24, 72];
//Return a new array of numbers that includes every even number from the previous Arrays
let myNewArray = []
figures.filter(num => {
  if (num % 2 === 0) {
    myNewArray.push(num)
  }
})
console.log(myNewArray)

let newArray = [];
for (let index = 0; index < figures.length; index++) {
  if (figures[index] % 2 === 0) {
    // console.log(figures[index])
    newArray.push(figures[index])
  }
}

let onlyEven = array => array.filter(element => element % 2 === 0);
console.log(onlyEven(figures))
console.log(newArray);
console.log(figures)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let takes = array => {
  let sorted = array.sort((a, b) => a - b)
  console.log(sorted[1] + sorted[sorted.length - 2]);
}


let myFunction = array => {
  let sorts = array.sort((a, b) => a - b)
  console.log(sorts[1] + sorts[sorts.length - 2])
}


// let arr = [2, 4, 3, 7, 20, 19]
// takes(arr)

// let arrs = ["I", "study", "JavaScript", "right", "now"];

// // remove 2 first elements
// // let removed = arrs.splice(-5, 2, "yes");

// // console.log( removed );
// console.log(arrs.slice(-2))

// console.log(arrs.slice())

let arrayed = ["I", "study", "JavaScript", "right", "now" ];

console.log( arrayed.slice(1, -1) ); // e,s (copy from 1 to 3)

console.log( arrayed.slice(-3) );
console.log(arrayed) 

let arr = [1, 0, false, "I", "study", "JavaScript", "right", "now", ];

console.log( arr.lastIndexOf("study") ); // 1
console.log( arr.indexOf("study") ); // 2
alert( arr.indexOf(null) ); // -1

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2
console.log(someUsers)
console.log(users)

let uses = ["Bilbo", "Gandalf", "Nazgul"]
let lengths = uses.map(item => item.length);
console.log(lengths); // 5,7,6
// console.log(uses)

let used = [1, -2, 15, 2, 0, 8];
  used.sort(function(a, b) {
  console.log( a + " <> " + b );
  return a - b;
});

console.log(used)

let names = 'Bilbo, Gandalf, Nazgul';
// let anotherNames = names.join(';');

let ar = names.split(' ', 2);

for (let name of ar) {
  console.log( `A message to ${name}.`);
}

let arres = 'Bilbo, Gandalf, Nazgul, Saruman'
let arred = arres.split(', ', 2);

console.log(arred)
console.log(arres); // Bilbo, Gandalf