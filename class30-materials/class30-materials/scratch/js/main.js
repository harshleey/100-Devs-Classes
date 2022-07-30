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
/* If the main character attacks the target, the target's health will reduce by the damage done
If at the end of the game, the main character's health is greater than zero it means that the character eliminated the target*/

// class Character {
//  constructor(name, health, strength) {
//    this.name = name;
//    this.health = health;
//    this.strength = strength;
//    this.xp = 0; // XP is always zero for new characters
//  }

//  attack(target) {
//   if (this.health > 0) {
//    let damage = this.strength
//    // console.log(`${this.name} eliminated ${target.name} by ${damage} damage point`)
//    console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`)
//   target.health -= damage;
//   if (target.health > 0) {
//    // console.log(`${this.name} eliminated ${target.name} by ${damage} damage point`)
//    console.log(`${target.name} has ${target.health} health points `)
//   }
//   else {
//    target.health = 0
//    let bonusXP = 10
//    console.log(`${this.name} eliminated ${target.name} and earned ${bonusXP} bonus points`)
//    this.xp += bonusXP
//   }
  
//  } 
//  else {
//   console.log(`${this.name} can't attack (they've been eliminated)`);
//  }
// }

//   describe() {
//    console.log (`${this.name} has ${this.health} health points, ${this
//     .strength} as strength and ${this.xp} XP points`) ;
//   }
// }

// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());

// class Dog {
//  constructor(name, species, size) {
//   this.name = name 
//   this.species = species
//   this.size = size
//  }

//  bark() {
//   // let bark = this.bark()
//   if (this.size > 60) {
//    return 'GRRRR GRRRR'
//   } 
//   else {
//    return "Woof! Woof!"
//   }
//  }
//  describe() {
//   console.log(`${this.name} is a ${this.species} dog measuring ${this.size}`);
//   console.log(`Look, a cat! ${this.name} barks: ${this.bark()}`);
//  }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(fang.describe())

// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description

class Account {
 constructor(name) {
  this.name = name
  this.balance = 0
 }
 credit (value) {
  return this.balance + value
 }
 describe() {
  console.log(`Owner: ${this.name}, balance: ${this.credit(1000)}`)
 }
}

let sean = new Account('Sean')
let brad= new Account('Brad')
let georges = new Account('Georges')

let people = [sean, brad, georges]
for (person of people) {
 person.describe()
}

