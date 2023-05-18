module.exports = (app) => {
    const movieController = require('../controllers/movieController');

    app.get('/movies', movieController.findAll);
    app.get('/movies/:genre', movieController.findByGenre);
    app.get('/movies/external/search', movieController.externalAPI);
}