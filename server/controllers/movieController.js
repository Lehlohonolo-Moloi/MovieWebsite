const connection = require('../services/db');

exports.findAll = (req, res) => {
    connection.query('SELECT * FROM movie' ,
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

    connection.query('select * from movie where genre_id=?',
        genre,
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};