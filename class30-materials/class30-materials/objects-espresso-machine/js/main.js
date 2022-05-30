//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
// class EspressoMachine {
//   constructor(model, make, color, price) {
//    this.model = model
//    this.make = make
//    this.color = color
//    this.price = price
//   }

//   turnOn() {
//    console.log('Good day, I am now on!!')
//   }
//    brew(){
//     console.log("brew!!!!!")
//    }

//    steam() {
//     console.log ("ITS SUMMERRRRR SALESSSSSS    50%%%%%%")
//    }
//   }


class Animal {
  constructor(name, breed, type) {
    this._name = name
    this._breed = breed
    this._type = type
  }
  get name() {
    return this._name
  }

  get breed() {
    return this._breed
  }

  get type() {
    return this._type
  }

  speak() {
    return (`${this.name} makes a sound`)
  }
}

class Domestic extends Animal {
  constructor(name, breed, type, diet) {
    super(name, breed, type)
    this._diet = diet
  }
  get diet() {
    return this._diet
  }
  speak() {
    super.speak()
  }
  trick() {
    console.log(`${this.name} likes to do tricks`)
  }
}

class Farm extends Animal {
  constructor(name, breed, type, size) {
    super(name, breed, type)
    this._size = size
 }
 get size() {
  return this._size
 }
 speak() {
  super.speak()
 }
}

class Horse extends Farm {
  constructor(name, breed, type, size) {
    super(name, breed, type, size)
  }
  speak() {
    super.speak()
    console.log(`${this.name} heyheyhey`)
  }
}

class Pig extends Domestic {
  constructor(name, breed, type,  diet) {
    super(name, breed, type, diet)
  }
  trick() {
    super.trick()
    console.log(`This ${this.type} likes to flip`)
  }
}

let Rosy = new Horse ('Rosy', 'Appaloosa', 'horse', 'big' )
let Piggy = new Pig ('Piggy', 'Pig', 'micro pig', 'mud')