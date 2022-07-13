//Create a stopwatch object that has four properties and three methods
let stopwatch = {
  color: 'red',
  shape: 'square',
  brand: 'Apple',
  length: '20cm',

  behavior() {
    return `It counts time`
  },

  users() {
    return `They are majorly used by athletes, coaches, professionals as a matter of fact it can be used by anyone`
  },

  narration() {
    return `The ${stopwatch.brand} stopwatch came in a ${stopwatch.shape} shape and varieties of colors one of which is ${stopwatch.color} and at a ${stopwatch.length} length. ${stopwatch.behavior()}. ${stopwatch.users()}.`
  }
}
console.log(stopwatch)

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  console.log( +code ); 
}