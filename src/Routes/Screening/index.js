const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/Screening");

Router.post("/", Controller.createScreening);

module.exports = Router;