"use strict";
/* Feature: Webpack task: Add tasks to bundle modules for browsers */
module.exports = (function testSuite() {
  var English = require("yadda").localisation.English;
  var assert = require("assert");
  return English.library()
  /*Scenario:  */
.define("Given",
      function test(done) {
        assert(true);
        done();
      })
.define("When",
      function test(done) {
        assert(true);
        done();
      })
.define("Then",
      function test(done) {
        assert(true);
        done();
      });
})();
