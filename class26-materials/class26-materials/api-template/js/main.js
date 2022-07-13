//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  // const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const url = 'https://api.gameofthronesquotes.xyz/v1/houses';
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[0].slug;
        document.querySelector('h3').innerText = data[0].name
        // document.querySelector('h4').innerText = data.sentence
      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
}