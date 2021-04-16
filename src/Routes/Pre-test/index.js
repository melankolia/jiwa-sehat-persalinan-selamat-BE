const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/Pre-test");

Router.post("/:secureId", Controller.createPretest);

module.exports = Router;