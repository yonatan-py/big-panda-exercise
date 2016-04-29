var assert = require('chai').assert;

describe('reader', function() {
  describe('sanity', function() {
    it('should not through error', function () {
      var reader = require('../reader');
      reader.init();
      reader.onLine(function (line) {
      })
    });
  });
});
