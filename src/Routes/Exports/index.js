const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/Exports");

Router.post("/", Controller.exportExcel);

module.exports = Router;