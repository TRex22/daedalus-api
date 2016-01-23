var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'daedalus-api' });
  console.log('Web Index has been hit');
});

module.exports = router;
