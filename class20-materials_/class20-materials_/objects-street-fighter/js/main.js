//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

const fighter = {
  name: 'Sonya',
  weapon: 'Blade',
  strength: 300,
  gender: 'female',

  gameName() {
    return `Mortal Kombat`
  },

  behaviour() {
    return `She is one of the fiercest character in the game and very sleek with her weapon. She's also so brave and can take on anyone in the game, yeah including Liu Kang`
  },

   narration() {
    return `${this.name} is from the ${this.gameName()}. She is a ${this.gender} with a strength of ${this.strength} and uses a ${this.weapon} as a weapon. ${this.behaviour()}. `
  }
};

console.log(fighter.narration())