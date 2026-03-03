

class HomeController {

    home(req, res) {

        let msg = "Login realizado com sucesso!";

        res.render('home', { msg });
    }
}

module.exports = HomeController;