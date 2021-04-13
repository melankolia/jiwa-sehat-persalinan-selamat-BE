const express = require("express");
const Router = express.Router();

// Routes
const Responden = require("./Responden");
const Users = require("./User");
const Screening = require("./Screening");

Router.use("/responden", Responden);
Router.use("/login", Users);
Router.use("/screening", Screening);

module.exports = Router;