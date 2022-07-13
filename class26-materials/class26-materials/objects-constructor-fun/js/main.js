//Create a constructor with 4 properties and 3 methods
  function PizzaMaker(size, sauce, toppings, shape) {
    this.size = size
    this.sauce = sauce
    this.toppings = toppings
    this.shape = shape

    this.estimatedDelivery = function() {
      console.log ("calculating......")
    }

    this.cooking = function() {
      console.log("shhhhrrrrrrrrrrr")
    }

    this.cutting = function() {
      console.log ("cut!!!!!")
  }
}

let maxi = new PizzaMaker ("large", "tomato sauce", ['pepper', 'beef', 'corn', 'pineapple'], "round")
console.log(maxi)
PizzaMaker.prototype.cheese = true
console.log(maxi.cheese)