const connection = require('../services/db');
const fetchMovie = require('../controllers/FetchMovie');

exports.findAll = (req, res) => {
    connection.query('SELECT m.movie_name AS `MovieName`, m.release_date AS `ReleaseDate`, g.description AS `Genre` FROM Movie m INNER JOIN Genre g ON m.genre_id = g.genre_id' ,
        function (err, results, fields){
            if(err) throw err;
            res.end(JSON.stringify(results));
        });
};

exports.findByGenre = (req, res) => {
    let genre = 0;
    switch(req.params.genre){
        case "Action":
            genre = 1;
            break;
        case "Drama":
            genre = 2;
            break;
        case "Comedy":
            genre = 3;
            break;
        case "Adventure":
            genre = 4;
            break;
        case "Romance":
            genre = 5;
            break;
        case "Documentary":
            genre = 6;
            break;
        case "Crime":
            genre = 7;
            break;
        case "Thriller":
            genre = 8;
            break;
        case "Animation":
            genre = 9;
            break;
        case "Sci-Fi":
            genre = 10;
            break;
        case "Horror":
            genre = 11;
    }
    
    connection.query('SELECT m.movie_name AS `MovieName`, m.release_date AS `ReleaseDate`, g.description AS `Genre` FROM Movie m INNER JOIN Genre g ON m.genre_id = g.genre_id WHERE m.genre_id=?',
        genre,
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};


exports.externalAPI = (request, response) => {
    let movieName = request.query.name; //If the movie name has spaces in it, those spaces need to be replace with '%20' (frontend)
    var movie;
    fetchMovie.extMovie(movieName).then(value => {
        movie = value;
    });
    setTimeout(() => console.log(movie), 2000);
    setTimeout(() => response.end(JSON.stringify(movie)), 2000);
}