const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/Screening");

Router.post("/:secureId", Controller.createScreening);

module.exports = Router;