var mongojs = require('mongojs');

var typeCollection;
var wordsCollection;
var db;
module.exports = {
  init: function (dbName) {
    db = mongojs(dbName || 'bigPanda');
    typeCollection = db.collection('types');
    wordsCollection = db.collection('words');
  },
  updateCollection: function (collection, key) {
    collection.update({key: key}, {$inc: {count: 1}}, {upsert: true});
  },
  updateWord: function (word) {
    this.updateCollection(wordsCollection, word);
  },
  updateType: function (type) {
    this.updateCollection(typeCollection, type);
  }
}
