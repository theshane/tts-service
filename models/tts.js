'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tts = sequelize.define('Tts', {
    rating: DataTypes.INTEGER,
    ticker: DataTypes.STRING
  }, {});
  return Tts;
};