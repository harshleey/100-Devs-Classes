//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  // const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`
  // const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=details&format=json`
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let name = data.title
        localStorage.setItem("title", name )
        // if(data.media_type === "image"){
        //   document.querySelector('img').src = data.hdurl
        // }else if(data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }else{
        //   alert('Media Not Supported - Contact NASA IMMEDIATLY')
        // }
       
        // document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

