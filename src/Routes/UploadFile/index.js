const express = require("express");
const Router = express.Router();

const Controller = require("../../Controllers/UploadFile");

Router.post("/", Controller.uploadFileToFirebase);

module.exports = Router;