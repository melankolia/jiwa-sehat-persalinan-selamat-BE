const express = require("express");
const Router = express.Router();

// Routes
const Responden = require("./Responden");

Router.use("/responden", Responden);

module.exports = Router;