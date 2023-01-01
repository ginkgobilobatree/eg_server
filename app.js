const express = require("express");
const app = express();
const cors = require("cors");
const Controller = require("./modules/Controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(Controller);

module.exports = app;
