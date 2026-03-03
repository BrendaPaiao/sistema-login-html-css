const HomeController = require("../controllers/homeController");
const express = require('express');

let ctrl = new HomeController();
const router = express.Router();

router.get("/", ctrl.home);

module.exports = router;