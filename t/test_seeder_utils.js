const expect  = require('chai').expect;
const {getTickersFromSampleData} = require('../lib/tts/utils/seeder_utils')

it('Should return an array of ticker ids', function() {
    data = getTickersFromSampleData();
    const sampleExpectedTickers = ['YZB350V2-YCHL',
    'YZY350V2-ZEBRA',
    'YZB350V2-YSHYA',
    'AJ11-PO19'];
    const sampleTickersFound = sampleExpectedTickers.reduce((accumulator, currentValue) => {
        if(data.includes(currentValue)) {
            accumulator++;
        }
        return accumulator;
    },0); 
    expect(sampleTickersFound).equals(4);
});
