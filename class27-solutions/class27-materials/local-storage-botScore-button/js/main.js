//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}

document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
  let botScoreVal = Number(localStorage.getItem('botScore'))
  botScoreVal += 1
  localStorage.setItem('botScore', botScoreVal)
}

// EXPLANATION
// The localStorage object allows you to save key/value pairs in the browser.

// TO SAVE DATA TO LOCAL STORAGE
// localStorage.setItem(key, value)

// TO READ DATA FROM LOCAL STORAGE
// localStorage.getItem(key);

// TO REMOVE DATA FROM LOCAL STORAGE
// localStorage.removeItem(key);

// TO REMOVE all DATA FROM LOCAL STORAGE
// localStorage.clear();


// console.log(localStorage.key(1)) // To get the keys per index.

const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnInsert');
const output = document.querySelector('.output');
// let storage = localStorage.setItem(key, value)

btnInsert.addEventListener('click', function() {
 const key = inputKey.value;
 const value = inputValue.value;
//   localStorage.setItem(key, value);

// output.textContent = key + ": " + value;
if (key && value) {
  localStorage.setItem(key, value);
  output.textContent = key + ": " + value;
}


// if (key) {
//   localStorage.getItem(value);
//   output.textContent = value;
// }
});

for(let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  output.innerHTML += `${key}: ${value} <br>`
}

// localStorage.getItem(inputKey.value, inputValue.value);

// output.textContent = inputKey.value + " " + inputValue.value;