const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../../config/config.json');
const TTSModel = require('../tts/models/tts.js')
module.exports = {
    TTsModel: (sequelizeParam) => {
        let sequelize = sequelizeParam;
        if(!sequelizeParam) {
            sequelize = new Sequelize(dbConfig[process.env.NODE_ENV]);
        }
        return TTSModel(sequelize, DataTypes);
    }
}
