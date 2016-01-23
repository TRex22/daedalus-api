var express = require('express');
var router = express.Router();
var hactarjs = require('hactarjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log('Web Users has been hit');
});


//res.status(400).send('Bad Request');
//501 will say the voucher does not exist

module.exports = router;
