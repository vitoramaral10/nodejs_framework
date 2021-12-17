class WelcomeController {
    index(req, res) {
        res.render('welcome/index')
    }

}

module.exports = new WelcomeController;