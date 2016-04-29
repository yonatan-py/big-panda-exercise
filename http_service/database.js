var mongojs = require('mongojs');
var db = mongojs('bigPanda');

module.exports = {
  findOne: function (collection, key, callback) {
    db.collection(collection).findOne({"key": key}, function (error, data) {
      if(error) {
        callback(error);
      }
      else {
        callback(null, data);
      }
    });
  }
}
