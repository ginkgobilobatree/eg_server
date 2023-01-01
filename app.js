const express = require("express");
const app = express();
const cors = require("cors");
const Controller = require("./modules/Controller");

app.use(express.json());//erlaubt Übersendung der Daten aus body
app.use(cors());//erlaubt Datenaustausch zwischen sandbox-endpoint und diesem server

app.use(Controller);

module.exports = app;
