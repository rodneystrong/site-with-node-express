var express = require('express');
var router = express.Router();

router.get('/speakers', function(req,res) {
  var info = '';
  //appData comes from the app.js file which was app.set from the dataFile
  var dataFile = req.app.get('appData');

  dataFile.speakers.forEach(function(item){
    info += `
    <li>
      <img src="/images/speakers/${item.shortname}_tn.jpg" alt="profile pic" style="height: 300px;">
      <h2>${item.name}</h2>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
    </li>
    `
  })

  // res.send('<h1>Nice meetups!</h1>');
  res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    ${info}
    `
  );
});

router.get('/speakers/:speakerid', function(req,res) {

  var dataFile = req.app.get('appData');
  var speaker = dataFile.speakers[req.params.speakerid];


  // res.send('<h1>Nice meetups!</h1>');
  res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <img src="/images/speakers/${speaker.shortname}.jpg" alt="profile pic">
    <h2>${speaker.name}</h2>
    <h3>${speaker.title}</h3>
    <p>${speaker.summary}</p>
    `
  );
});

module.exports = router;
