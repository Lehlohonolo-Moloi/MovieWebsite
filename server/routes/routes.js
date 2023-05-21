module.exports = (app) => {
    const movieController = require('../controllers/movieController');
    const userAuthentication = require('../controllers/userAuthentication');
    const tempController = require('../controllers/tempController');

    app.get('/movies', movieController.findAll);
    app.post('/movies', tempController.getMatchingMovies);
    app.get('/movies/:genre', movieController.findByGenre);
    app.get('/movies/year', movieController.findByYear);
    app.get('/movies/external/search', movieController.externalAPI);
    app.get('/user/credentials', userAuthentication.authenticate);
    app.get('/values', tempController.getValuesInColumn);
}