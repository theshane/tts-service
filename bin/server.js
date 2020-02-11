const express = require("express");
const dbConfig = require("../config/config.json");
const { Sequelize, DataTypes } = require("sequelize");
const {
  ttsGetRatings,
  ttsPost,
  ttsGetTTsValue
} = require("../lib/tts/handlers/TTSHandler.js");

//Create db connection once and send it to the handler
const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV]);

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

// Routes run throuh seperate handlers
// this will allow us to unit test them a little easier
app.get("/true-to-size/:ticker/ratings", (req, res) =>
  ttsGetRatings(req, res, sequelize, DataTypes)
);
app.get("/true-to-size/:ticker/tts-value", (req, res) =>
  ttsGetTTsValue(req, res, sequelize, DataTypes)
);
app.post("/true-to-size/:ticker/rating", (req, res) =>
  ttsPost(req, res, sequelize, DataTypes)
);

const server = app.listen(port, () =>
  console.log(`TTS Service listening on port ${port}!`)
);

module.exports = server;
