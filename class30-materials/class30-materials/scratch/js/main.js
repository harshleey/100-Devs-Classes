// class Animal {
//  constructor(name) {
//   this._name = name
//  }
//  get name() {
//   return this._name
//  }
//  speak() {
//   console.log(`${this._name} makes a sound`)
//  }
// }

// class Cat extends Animal {
//  constructor(name, breed) {
//   super(name)
//   this._breed = breed
//  }

//  get breed() {
//   return this._breed
//  }
//  speak() {
//   super.speak()
//   console.log(`${this.name} meows`)
//  }
// }

// let garfield = new Cat('Garfield', 'Shepard')
// let salem = new Cat('Salem', 'American')

// THE IDEA
/* If the main character attacks the target, the target's health will reduce by the damage done*/

class Character {
 constructor(name, health, strength) {
   this.name = name;
   this.health = health;
   this.strength = strength;
   this.xp = 0; // XP is always zero for new characters
 }
}