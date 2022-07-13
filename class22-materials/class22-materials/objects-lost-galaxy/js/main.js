//Create a mouse object that has four properties and three methods
let mouse = {};
  mouse.color = 'yellow',
  mouse.brand = 'Apple',
  mouse.shape = 'like a mouse',
  mouse.wireless = true,

  
  mouse.leftClick = function() {
    return `LEFT CLICKKKKKK`
  },

  mouse.rightClick = function() {
    return `RIGHT CLICKKKKK`
  },

  mouse.scroll = function() {
    return `JUMP JUMP JUMP`
  }
  



function MakeCar (carMake, carModel, carColor, numOfDoors) {
  this.make = carMake
  this.model = carModel
  this.color = carColor
  this.doors = numOfDoors
  this.honk = function() {
   return `BEEP BEEP FUCKER`
  }
  this.lock = function() {
    return `Locked ${this.doors} doors`
  }
}

MakeCar.prototype.bluetooth = true  //The factory has it but tesla doesn't and all tesla had to do was inherit it from the factory. Think about leon's grandma car explanation.

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4);
console.log(hondaCivic)

let tesla = new MakeCar ('Tesla', 'Roadster', 'Red', 2)
console.log(tesla)
console.log(tesla.bluetooth)
console.log(tesla.doors.toString())
//  let stopwatch = {};

//  stopwatch.currentTime = 12;

//  stopwatch.tellTime = function(time) {
//    console.log(`The current time is ${time}`)
//  }

//  stopwatch.tellTime(stopwatch.currentTime)