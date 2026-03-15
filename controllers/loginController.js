const UsuarioModel = require('../models/usuarioModel');

class LoginController {

    loginView(req, res) {
        res.render('login');
    }

    login(req, res) {

        const emailUso = req.body.email;
        const senhaUso = req.body.senha;
        let msg = "";

        if(emailUso === email && senhaUso === senha) 
            res.redirect("/home");
        else {
            msg = "Preencha os campos corretamente!";
            res.render('login', { msg });
        }
    }

    esqueciSenhaView(req, res) {
        res.render('esqueciSenha');
    }

    esqueciSenha(req, res) {

        const emailUso = req.body.email;
        let msg = "";
        let tipo = "";

        if(emailUso.includes("@") && emailUso === email) {
            msg = `Enviamos um link para recuperação de senha no e-mail ${emailUso}`;
            tipo = "sucesso";
        } else {
            msg = "Por favor, digite o email corretamente!";
            tipo = "erro";
        }

        res.render('esqueciSenha', { msg, tipo });
    }
}

module.exports = LoginController;