'use strict';
const seeder_utils = require("../utils/seeder_utils");

module.exports = {
  up: (queryInterface) => {
      const seeds = [];
      seeder_utils.getTickersFromSampleData().forEach((seed) => {
        seeds.push({
          rating: 3,
          ticker: seed,
          createdAt: (new Date()).toDateString(),
          updatedAt: (new Date()).toDateString(),
        });
      });
      
      return queryInterface.bulkInsert('Tts', seeds, {});
  },
  down: () => {
      return;
  }
};
