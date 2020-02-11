const TTSModel = require('../models/tts.js')

/**
 * ttsGetTTsValue
 * Responds with the average tts value for given ticker
 * @param req Express request
 * @param res Express response
 * @param sequelize initiaized sequelize
 */
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

/**
 * ttsPost
 * Accepts a new rating for a tag
 * Responds with the new average tts value for given ticker
 * @param req Express request
 * @param res Express response
 * @param sequelize initiaized sequelize
 * @param DataTypes sequelize DataTypes
 */
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

/**
 * ttsGetRatings
 * Responds with the list tts value for given ticker
 * @param req Express request
 * @param res Express response
 * @param sequelize initiaized sequelize
 * @param DataTypes sequelize DataTypes
 */
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