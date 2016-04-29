var express = require('express'),
    database = require('./database'),
    api = require('./api')(database)
    ;

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/:collection/count', function(req, res) {
  var key = req.query.key;
  var collection = req.params.collection;
  api(collection, key, res);
});

app.get('/documentation', function (req, res) {
  res.send('use: GET: /api/:collection/count?key=&ltkey&gt');
});

app.use('/api', router);

app.listen(port);
