var express = require('express');
var router = express.Router();

var dataFile = require('./data/data.json');

router.get('/', function(req,res) {

  res.send(`
    <h1>Check out all my peeps!</h1>
    `
  );
});

module.exports = router; 