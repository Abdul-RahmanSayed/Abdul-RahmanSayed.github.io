let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    console.log("Printing all movies....");
    let movieList = "";
    for (let movie of allMovies) {
        for (let y in movie) {
            if (y + "" == "title") {
                movieList += movie[y] + ", ";
            } else if (y + "" == "rating") {
                movieList += "rating of " + movie[y] + ", ";
            } else {
                movieList += "havewatched: " + movie[y];
            }
        }
        movieList += "\n";
    }
    console.log(movieList);
    console.log("\nYou have " + allMovies.length + " movies in total");
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    let movieList = "";
    let movieCount = 0;
    for (let movie of allMovies) {
        if (movie.rating > rating) {
            for (let y in movie) {
                if (y + "" == "title") {
                    movieList += movie[y] + ", ";
                } else if (y + "" == "rating") {
                    movieList += "rating of " + movie[y] + ", ";
                } else {
                    movieList += "havewatched: " + movie[y];
                }
            }
            movieCount++;
            movieList += "\n";
        }
    }
    console.log(movieList);
    console.log("\nIn total, there are " + movieCount +" matches")
}

//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    allMovies[allMovies.findIndex(movie => movie.title == title)].havewatched = !allMovies[allMovies.findIndex(movie => movie.title == title)].havewatched;
    console.log("changing the status of the movie....");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);