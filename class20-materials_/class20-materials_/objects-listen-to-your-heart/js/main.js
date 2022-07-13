//Create a stopwatch object that has four properties and three methods
let stopwatch = {
  color: 'black',
  brand: 'Apple',
  shape: 'round',
  size: '1 kg',

  behaviour() {
    return `It tracks time using seconds minutes and hours.`
  },

  purpose() {
    return `They are majorly used in competition in order to gauge how much time is used especially in sprints and relays`
  },

  narration() {
 return `The newly released ${this.brand} stopwatch comes in the color ${this.color}, a ${this.shape} and weighs ${this.size}. ${this.behaviour()}. ${this.purpose()}.`
  }

}

console.log(stopwatch.narration())