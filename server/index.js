require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const movieController = require('./controllers/movieController');
const filterController = require('./controllers/filterController');


const app = express();

//app.use('/api', routes);

const corsOptions = {
    origin: ["http://127.0.0.1:5500",  "http://advanced-movie-search.p.rapidapi.com"]
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(express.json());

app.use(express.urlencoded({extended:true}));

const port = process.env.PORT;

//routes(app);



    app.get('/movies', movieController.findAll);
    app.get('/movies/:movieId', movieController.findOne);
    app.post('/movies', filterController.getMatchingMovies);
    app.get('/movies/:genre', movieController.findByGenre);
    app.get('/movies/actors/:movieId', movieController.actorsByMovieId);
    app.get('/movies/directors/:movieId', movieController.directorsByMovieId);
    app.get('/movies/external/search', movieController.externalAPI);
    app.get('/values', filterController.getValuesInColumn);

/*app.listen(port, () => {
    console.log(`Server is running on port ${port} ...`);
});
*/

module.exports.handler = app;