function storeMovies(input) {
    let movies = [];

    function findMovie(name) {
        return movies.find(m => m.name === name);
    }

    for (let command of input) {
        if (command.startsWith('addMovie')) {
            let name = command.slice(9);
            movies.push({ name });
        } else if (command.includes(' directedBy ')) {
            let [name, director] = command.split(' directedBy ');
            let movie = findMovie(name);
            if (movie) movie.director = director;
        } else if (command.includes(' onDate ')) {
            let [name, date] = command.split(' onDate ');
            let movie = findMovie(name);
            if (movie) movie.date = date;
        }
    }

    movies.filter(m => m.name && m.director && m.date)
          .forEach(m => console.log(JSON.stringify(m)));
}

// Тест на функцията
let input1 = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];

console.log("Резултат за първия вход:");
storeMovies(input1);

let input2 = [
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
];

console.log("\nРезултат за втория вход:");
storeMovies(input2);