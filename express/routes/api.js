var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to API');
});

// Example for Testing purpose
router.get('/currentTime', function(req, res, next) {
  var currentTime = new Date().toLocaleString();
  res.send(currentTime);
});

module.exports = router;