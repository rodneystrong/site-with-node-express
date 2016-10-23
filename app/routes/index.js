var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {

  res.send(`
    <h1>Check out all my peeps!</h1>
    //remember, the 'public' folder is the root
    <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
    `
  );
});

module.exports = router;
