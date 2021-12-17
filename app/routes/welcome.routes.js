const WelcomeController = require('../controllers/WelcomeController')

module.exports = app => {
    app.get('/', (req, res) => WelcomeController.index(req, res))
}