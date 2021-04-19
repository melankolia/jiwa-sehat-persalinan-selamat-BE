const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/Scheduler");

Router.post("/", Controller.uploadFileToFirebase);

module.exports = Router;