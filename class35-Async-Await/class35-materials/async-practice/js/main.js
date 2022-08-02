 //Code 01 : This solely depends on the order of the function's call
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     console.log('Paper delivered to house 2')
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()


//Code 02
// function houseOne() {
//     console.log('Paper delivered to house 1')
// }

// function houseTwo() {
//     setTimeout(() => { console.log('Paper delivered to house 2')}, 2000)
// }
//     // When it gets here, it waits 3 seconds and by then housethree has logged then houseTwo logs. Even if it was 0 sec, it would have waited and this would only be different if houseThree had a higher timeout second than houseTwo did e.g if two was 0 and Three was 1000ms

// function houseThree() {
//     setTimeout(() => { console.log('Paper delivered to house 3')}, 1000 )
// }
// houseOne()
// houseTwo()
// houseThree()



//Code 03
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }

// function houseTwo(callback) { //Note that callback is a parameter and houseThree was passed as an argument which is also a function of it's own, this ensures that houseThree only logs AFTER houseTwo logs.
//     setTimeout(() => {
//         console.log('Paper delivered to house 2')
//         callback()
//     })
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo(houseThree) //This is a higher order function i.e a function that takes in another function as an argument.

//Code 04
// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne() //This is called a callback hell which is essentially nesting a callback into another callback.

//Code 05
// const promise = new Promise((resolve, reject) => {
//     const error = false
//     if (!error) {
//         resolve('Operation was fulfilled')
//     } 
//     else {
//         reject('Operation has failed')
//     }
// })

// console.log(promise)

//Code 06 : This wait for the second function (which has 5000ms) to log before the last one does
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }
// houseOne()
//     .then(data => console.log(data))
//     .then(houseTwo)
//     .then(data => console.log(data))
//     .then(houseThree)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Code 07
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }

// async function getPaid(){
//     const houseOneWait = await houseOne()
//     const houseTwoWait = await houseTwo()
//     const houseThreeWait = await houseThree()
//     console.log(houseOneWait)
//     console.log(houseTwoWait)
//     console.log(houseThreeWait)
// }

// getPaid()

//Code 08
async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random') //This returns a promise and whatever gets resolved in our promise is stored into res
    const data = await res.json() //Then we parse the resolved promise into the "data" variable
    console.log(data)
    // .catch(err) {

    // }
}
getACuteDogPhoto()

