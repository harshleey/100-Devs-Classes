//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeNetflixTvShow {
  constructor(title, genre, rating, numOfEp) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.numOfEp = numOfEp;
  }

  stop() {
    console.log("stopping........")
  }

  play() {
    console.log("playing.......")
  }

  saveToList() {
    console.log("Saved to list")
  }
}

let bridgerton = new MakeNetflixTvShow("Bridgerton", "Romance", "99%", 16)

// console.log(Bridgerton)

