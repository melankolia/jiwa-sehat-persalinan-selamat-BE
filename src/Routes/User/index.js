const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/User");

Router.post("/", Controller.login);

module.exports = Router;