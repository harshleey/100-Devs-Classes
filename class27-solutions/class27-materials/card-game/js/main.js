// let deckId = ''

// fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         deckId = data.deck_id
        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });

// document.querySelector('button').addEventListener('click', drawTwo)

// function drawTwo(){
//   const url = `https://www.deckofcardsapi.com/api/deck/krn70o7jitc2/draw/?count=2`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('#player1').src = data.cards[0].image 
//         document.querySelector('#player2').src = data.cards[1].image
        // let player1Val = convertToNum(data.cards[0].value)
        // let player2Val = convertToNum(data.cards[1].value)
        // if(player1Val > player2Val){
        //   document.querySelector('h3').innerText = 'Player 1 Wins'
        // }else if(player1Val < player2Val){
        //   document.querySelector('h3').innerText = 'Player 2 Wins'
        // }else{
        //   document.querySelector('h3').innerText = 'Time for War!'
        // }

        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// function convertToNum(val){
//   if(val === 'ACE'){
//     return 14
//   }else if(val === 'KING'){
//     return 13
//   }else if(val === 'QUEEN'){
//     return 12
//   }else if(val === 'JACK'){
//     return 11
//   }else{
//     return Number(val)
//   }
// }


fetch("https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=it")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(file)
        // deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
