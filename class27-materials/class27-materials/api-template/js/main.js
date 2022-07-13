//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://api.nasa.gov/planetary/apod?api_key=en11klZfBNtlYC0ne5dUGC4HkRMpf43n5nxo1mHc&date=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)  
//         if (data.media_type === "image") {
//           document.querySelector('img').src = data.hdurl
//         } 
//         else if (data.media_type === "video"){
//           document.querySelector('iframe').src = data.url
//         }
        
//         document.querySelector('h3').textContent = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


let deckId = ""

fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)  
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
