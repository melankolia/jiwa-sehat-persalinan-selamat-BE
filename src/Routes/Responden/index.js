const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/Responden");

Router.get("/", Controller.getResponden);
Router.get("/:secureId", Controller.getDetailResponden);
Router.post("/", Controller.createResponden);

module.exports = Router;