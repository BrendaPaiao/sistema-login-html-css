const express = require('express');
const LoginController = require("../controllers/loginController");

const router = express.Router();

let ctrl = new LoginController();
router.get("/", ctrl.loginView);
router.post("/", ctrl.login);
router.get("/esqueciSenha", ctrl.esqueciSenhaView);
router.post("/esqueciSenha", ctrl.esqueciSenha);

module.exports = router;