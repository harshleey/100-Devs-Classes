//Create an array of movies with at least three movies.
let movies = ['The Notebook', 'Black Panther', 'The AntMan', 'Avater', 'HawkEye']
//Using the array from above, store the first movie in a variable
let firstMovie = movies[0];
//Get the length of the original array and store it in a new variable
let lengthOfArray = movies.length;
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movies[movies.length - 1];
console.log(lastMovie)

// Yes, my solution will still work