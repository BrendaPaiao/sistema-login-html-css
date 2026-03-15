const UsuarioModel = require('../models/usuarioModel');

class LoginController {

    loginView(req, res) {
        res.render('login');
    }

    async login(req, res) {

        let msg = "";

        if(req.body.email && req.body.senha){
            let usuario = new UsuarioModel();

            usuario = await usuario.buscaUsuarioLogin(req.body.email, req.body.senha);

            if (usuario != null && usuario.usuAtivo === "S") {
                res.redirect("/home");
            }
            else {
                msg = "E-mail ou senha inválidos!";
                res.render('login', { msg });
            }
        }
    }

    esqueciSenhaView(req, res) {
        res.render('esqueciSenha');
    }

    async esqueciSenha(req, res) {

        const emailUsu = req.body.email;
        let msg = "";
        let tipo = "";

        if(emailUsu) {
            let usuario = new UsuarioModel();

            usuario = await usuario.buscaPorEmail(emailUsu);

            if(emailUsu.includes("@") && usuario != null && emailUsu === usuario.usuEmail) {
                msg = `Enviamos um link para recuperação de senha no e-mail ${emailUsu}`;
                tipo = "sucesso";
            } else {
                msg = "Por favor, digite o email corretamente!";
                tipo = "erro";
            }
        }

        res.render('esqueciSenha', { msg, tipo });
    }
}

module.exports = LoginController;