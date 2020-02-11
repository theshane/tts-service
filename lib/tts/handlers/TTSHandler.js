const TTSModel = require('../models/tts.js')

const ttsGetTTsValue = (req, res, sequelize) => {
    sequelize.query('SELECT avg(rating) as avg from "Tts" where ticker = :ticker',{
        replacements: {
            ticker: req.params.ticker
    }}).then((result) => {
        res.send({
            TrueToSizeCalculation: result[0][0].avg
        });
    });
};

const ttsPost = (req, res, sequelize, DataTypes) => {
    if(!req.body.rating) {
        res.status(400).send('Rating is required');
    }
    TTSModel(sequelize, DataTypes).create({
          ticker: req.params.ticker,
          rating: req.body.rating,
        }).then(() => {
            res.redirect(`/true-to-size/${req.params.ticker}/tts-value`);
      });
};

const ttsGetRatings = (req, res, sequelize, DataTypes) => {
    const ticker = req.params.ticker;
    TTSModel(sequelize, DataTypes).findAll({
        where: {
          ticker: ticker
        }
      }).then((ttsResults) => {
        res.send(ttsResults);
      });
};

module.exports = {
    ttsGetRatings,
    ttsGetTTsValue,
    ttsPost,
}