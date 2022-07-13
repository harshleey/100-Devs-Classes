//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(model, make, color, price) {
   this.model = model
   this.make = make
   this.color = color
   this.price = price
  }

  turnOn() {
   console.log('Good day, I am now on!!')
  }
   brew(){
    console.log("brew!!!!!")
   }

   steam() {
    console.log ("ITS SUMMERRRRR SALESSSSSS 50%%%%%%")
   }
  }
