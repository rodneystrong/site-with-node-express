var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {

  res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <h1>Check out all my peeps!</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
    `
    //remember, the 'public' folder is the root, so the above path to the background
    //image starts at /images
  );
});

module.exports = router;
