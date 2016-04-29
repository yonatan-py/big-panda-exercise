var assert = require('chai').assert;

describe('writer', function() {
  describe('sanity', function() {
    it('should not through error', function () {
      var randomDbName = 'fkjljkaflk';
      var writer = require('../writer');
      writer.init(randomDbName);
      writer.updateWord('baa');
      writer.updateType('daa');
    });
  });
});
