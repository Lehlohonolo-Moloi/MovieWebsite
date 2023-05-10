module.exports = (app) => {
    const movieController = require('../controllers/movieController');

    app.get('/movies', movieController.findAll);
}