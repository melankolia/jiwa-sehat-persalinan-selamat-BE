const express = require("express");
const cors = require('cors');
const logger = require("morgan");
const helmet = require('helmet');
const cron = require('node-cron');

require("dotenv").config();

// Init Router & App
const app = express();
const Router = require("./src/Routes/index");

// Init Morgan
app.use(logger("short"));

// Init Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Init Cross Server Scripting
app.use(helmet.xssFilter());

// Manage cors, menentukan situs mana yang boleh akses, situs yang mana yang di blacklist
app.use(cors());

// Init Router
app.use('/', Router);

// Init Server
app.listen(process.env.SERVER_PORT, () => console.log(`Running on Port ${process.env.SERVER_PORT}`));


// Init Cron Job Bakal Back-Up ke cloud storage jam 11 Malam
const ControllerUploadFile = require("./src/Controllers/UploadFile");
cron.schedule('0 23 * * *', () => {
      ControllerUploadFile.uploadFileToFirebase(null, null, null, "cron")
  }, {
    scheduled: true,
    timezone: "Asia/Jakarta"
  });
