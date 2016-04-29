module.exports = function (database) {
 return function handler(collection, key, res) {
  if (!key) {
    res.status(400).json({
      error: "in valid call, please reffer to documentation at: /documentation"
    });
    return;
  }
  try {
    database.findOne(collection, key, function (error, data) {
      if (error) {
        res.status(500).json({
          error: "error"
        });
      }
      else {
        if (!data) {
          console.info('no data with key: ' + key + ' in collection: ' + collection);
          res.status(400).json({
            error: 'no such ' + collection
          })
        }
        else {
          delete data._id;
          res.status(200).json(data);
        }
      }
    })
  }
  catch (error) {
    console.error(error);
    res.status(500).json({
      error: error
    })
  }
 }
}
