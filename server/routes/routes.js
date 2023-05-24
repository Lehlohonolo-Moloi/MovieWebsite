module.exports = (app) => {
    const movieController = require('../controllers/movieController');
    const filterController = require('../controllers/filterController');

    app.get('/movies', movieController.findAll);
    app.get('/movies/:movieId', movieController.findOne);
    app.post('/movies', filterController.getMatchingMovies);
    app.get('/movies/:genre', movieController.findByGenre);
    app.get('/movies/actors/:movieId', movieController.actorsByMovieId);
    app.get('/movies/directors/:movieId', movieController.directorsByMovieId);
    app.get('/movies/external/search', movieController.externalAPI);
    app.get('/values', filterController.getValuesInColumn);
}