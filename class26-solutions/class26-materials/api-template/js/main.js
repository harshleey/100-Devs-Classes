//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   // const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
//   const url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}";

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


// Weather API keys 3898e4f043e6a24c600770f4ce91f0ae
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// const url = "https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=3898e4f043e6a24c600770f4ce91f0ae";

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)

//         let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

//         document.querySelector('img').src = icon;
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });


      //Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  // const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=3898e4f043e6a24c600770f4ce91f0ae`;


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let name = data.name;
        let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        let temp = data.main.temp;
        let weatherType = data.weather[0].main;
        document.querySelector('h2').textContent = name;
        document.querySelector('img').src = icon;
        document.querySelector('h3').textContent = temp;
        document.querySelector('h4').textContent = weatherType;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}