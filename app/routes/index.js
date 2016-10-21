var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {

  res.send(`
    <h1>Check out all my peeps!</h1>
    <img src="/images/misc/background.jpg">
    `
  );
});

module.exports = router;
