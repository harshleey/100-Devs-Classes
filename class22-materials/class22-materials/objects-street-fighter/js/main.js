//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(fighterName, fighterGender, fighterWeapon, fighterStrength){
  this.name = fighterName
  this.gender = fighterGender
  this.Weapon = fighterWeapon
  this.strength = fighterStrength

  this.weaponSound = function() {
    return `SLASH SLASH SLASH!!`
  }

  this.punch = function() {
    return `HIT HIT HIT`
  }

  this.block = function() {
    return `GUIDE GUIDE GUIDE`
  }
}
StreetFighter.prototype.isFierce = true

let aurora = new StreetFighter('Aurora', 'Female', 'Sword', 200);
console.log(aurora);
console.log(aurora.isFierce)

function MakeSFCharacter(punch, kick, catchPhrase, specialMove) {
  this.punch = punch
  this.kick = kick
  this.catchPhrase = catchPhrase
  this.specialMove = specialMove
  this.taunt = function() {
    console.log(`You can't handle my ${this.specialMove}`)
  }
  this.winning = function() {
    console.log(`Haha! ${this.catchPhrase}`)
  }
  this.dash = function() {
    console.log(`Whoop, missed me!`)
  }
}

let ryu = new MakeSFCharacter('high', 'high', 'GET OVER HERE', 'HADDDDDDUUUUUKKKEEEENNNN')
console.log(ryu)
ryu.winning()
ryu.taunt();
ryu.dash()