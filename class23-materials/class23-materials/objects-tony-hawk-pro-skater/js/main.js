//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
// let fighter = new Array ()


// function Fighter(name, gender, weapon, strength) {
//   this.name = name
//   this.gender = gender
//   this.weapon = weapon
//   this.strength = strength

//   this.kill = function() {
//     return "SWISH SWISH"
//   }

//   this.kick = function() {
//     return 'HIT HIT HIT'
//   }

//   this.blow = function() {
//     return 'PUNCH PUNCH PUNCH'
//   }
// }

// OR

class Fighter {
    constructor (name, gender, weapon, strength) {
      this.name = name
      this.gender = gender
      this.weapon = weapon
      this.strength = strength
    }
      kill() {
        return "SWISH SWISH"
      }
    
      kick(){
        return 'HIT HIT HIT'
      }
    
      blow () {
        return 'PUNCH PUNCH PUNCH'
      }
}

let sonya = new Fighter('Sonya', 'Female', "Sword", 500)
console.log(sonya)
console.log(sonya.agility)
Fighter.prototype.agility = true
console.log(sonya.agility)
