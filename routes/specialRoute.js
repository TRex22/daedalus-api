var express = require('express');
var router = express.Router();
var hactarjs = require('hactarjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(400).send('Bad Request');
  console.log('Oh no!');
});


//
//501 will say the voucher does not exist

module.exports = router;
