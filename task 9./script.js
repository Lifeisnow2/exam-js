class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000;
  }
}

const myMovie = new Movie("Avatar", "James Cameron", 237000000);
const movieTitle = document.getElementById("movie-title");
const movieDirector = document.getElementById("movie-director");
const movieBudget = document.getElementById("movie-budget");
const movieExpensive = document.getElementById("movie-expensive");

movieTitle.textContent = myMovie.title;
movieDirector.textContent = myMovie.director;
movieBudget.textContent = myMovie.budget;
movieExpensive.textContent = myMovie.wasExpensive() ? "Yes" : "No";
