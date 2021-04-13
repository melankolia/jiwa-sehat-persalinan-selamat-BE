const express = require("express");
const Router = express.Router();

// Routes
const Responden = require("./Responden");
const Users = require("./User");

Router.use("/responden", Responden);
Router.use("/login", Users)

module.exports = Router;