'use strict';
const fs = require('fs');

module.exports = {
    /**
     * getTickersFromSampleData
     * Get a list of tickerSymbols from sample-data.json
     * returns Array of tickerSymbols
     */
    getTickersFromSampleData: () => {
        const fs = require('fs');
        const sampleData = fs.readFileSync('data/sample-data.json');
        let parsedData = JSON.parse(sampleData);
        return parsedData.Products.map((item) => item.tickerSymbol);
    }
}
