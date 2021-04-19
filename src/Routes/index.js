const express = require("express");
const Router = express.Router();

// Routes
const Responden = require("./Responden");
const Users = require("./User");
const Screening = require("./Screening");
const Pretest = require("./Pre-test");
const Posttest = require("./Post-test");
const Exports = require("./Exports");
const Scheduler = require("./Scheduler");

Router.use("/responden", Responden);
Router.use("/login", Users);
Router.use("/screening", Screening);
Router.use("/pretest", Pretest);
Router.use("/posttest", Posttest);
Router.use("/export", Exports);
Router.use("/scheduler", Scheduler);

module.exports = Router;