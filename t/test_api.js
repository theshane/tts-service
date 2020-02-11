const expect = require("chai").expect;
const axios = require("axios");

describe("API Testing", () => {
  let server;
  before(function() {
    delete require.cache[require.resolve("../bin/server.js")];
    server = require("../bin/server.js");
    // Increase timeout to allow for server to spin up
    // not a huge fan of this but doing it in the interest of time
    this.timeout(5000);
  });
  after(function(done) {
    server.close(done);
  });
  describe("GET /true-to-size/:ticker/ratings", () => {
    it("should contain default rating for 350V2-LM", done => {
      axios
        .get("http://localhost:3000/true-to-size/350V2-LM/ratings")
        .then(function(response) {
          // handle success
          expect(response.data[0].rating).equal(3);
          done();
        })
        .catch(function(error) {
          // handle error
          done(`Test Failed ${error}`);
        });
    });
  });

  describe("GET /true-to-size/:ticker/tts-value", () => {
    it("should contain TrueToSizeCalculation for 350V2-LM", done => {
      axios
        .get("http://localhost:3000/true-to-size/350V2-LM/tts-value")
        .then(function(response) {
          // handle success
          expect(response.data.TrueToSizeCalculation).equal(3);
          done();
        })
        .catch(function(error) {
          // handle error
          done(`Test Failed ${error}`);
        });
    });
  });

  describe("POST /true-to-size/:ticker/tts-value", () => {
    it("should take new rating and display new TrueToSizeCalculation for 350V2-LM", done => {
      axios
        .post("http://localhost:3000/true-to-size/350V2-LM/rating", {rating: 4})
        .then(function(response) {
          // handle success
          expect(response.data.TrueToSizeCalculation).equal(3.5);
          done();
        })
        .catch(function(error) {
          // handle error
          done(`Test Failed ${error}`);
        });
    });
  });
});
