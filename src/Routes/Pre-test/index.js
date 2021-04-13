const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/Pre-test");

Router.post("/", Controller.createPretest);

module.exports = Router;