//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
let fighter = {
  name: 'Katara',
  gender: 'female',
  hairColor: 'Black',
  Weapon: 'Fan',

  howSheFights() {
    return `She uses her princessy ${fighter.Weapon} as a weapon and its definitely not to blow you breeze but if she does it will blow you away. That thing is sharp like crazy and can cut through anything.`
  },

  description() {
    return `She is a princess from the game Mortal Kombat. Trust me, she is not just any type of princess and definitely not a pushover. She is fierce and smart.` 
  },

  narration() {
    return `${fighter.name} is a ${fighter.gender} with a long beautiful ${fighter.hairColor} hair color. ${fighter.howSheFights()}. ${fighter.description()}. `
  }
}

console.log(fighter.narration())