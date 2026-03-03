const express = require('express');
const loginRoute = require("./routes/loginRoute.js");
const homeRouter = require("./routes/homeRoute.js")

const server = express();
server.set('view engine', 'ejs');

server.use(express.urlencoded({extended: true}));
server.use("/", loginRoute);
server.use("/esqueciSenha", homeRouter);
server.use("/home", homeRouter);

server.listen(5001, function() {
    console.log("Servidor rodando...");
})