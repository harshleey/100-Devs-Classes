//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
let  sol = document.querySelector("#savageSays");
function callingSavage() {
  for(let i = 1; i <= 21; i++) {
    // console.log("21 ");
    sol.innerText += `21! `;
  };
}

callingSavage()