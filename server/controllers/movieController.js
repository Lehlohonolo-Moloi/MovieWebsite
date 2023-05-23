const connection = require('../services/db');
const fetchMovie = require('../controllers/FetchMovie');

exports.findAll = (req, res) => {
    connection.query('SELECT m.movie_id AS `MovieId`,m.movie_name AS `MovieName`, m.release_date AS `ReleaseDate`,m.image_url AS `Url`, g.description AS `Genre` FROM Movie m INNER JOIN Genre g ON m.genre_id = g.genre_id' ,
        function (err, results, fields){
            if(err) throw err;
            res.end(JSON.stringify(results));
        });
};

exports.findOne = (req, res) => {
    connection.query('select m.movie_name AS `MovieName`,m.movie_summary AS MovieSummary, m.release_date AS ReleaseDate, g.description AS `Genre`, p.prod_name AS Production,m.image_url AS `Url` from Movie m INNER JOIN Genre g on m.genre_id = g.genre_id INNER JOIN Production_Company p ON m.prod_id = p.prod_id where m.movie_id=?', [req.params.movieId], function(err, results, fields){
        if(err) throw err;
        res.end(JSON.stringify(results));
    });
};

exports.actorsByMovieId = (req, res) => {
    connection.query('SELECT a.first_name, a.last_name FROM Actor a INNER JOIN Movie_Actor ma ON a.actor_id = ma.actor_id INNER JOIN Movie m ON ma.movie_id = m.movie_id WHERE m.movie_id=?',
        [req.params.movieId],
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
}

exports.directorsByMovieId = (req, res) => {
    connection.query('SELECT d.first_name, d.last_name FROM Director d INNER JOIN Movie_Director md ON d.director_id = md.director_id INNER JOIN Movie m ON md.director_id = m.movie_id WHERE m.movie_id=?',
        [req.params.movieId],
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
}

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
    setTimeout(() => response.end(JSON.stringify(movie)), 2000);
}