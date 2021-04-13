const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/Post-test");

Router.post("/", Controller.createPosttest);

module.exports = Router;