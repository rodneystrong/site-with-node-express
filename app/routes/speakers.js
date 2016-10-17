var express = require('express');
var router = express.Router();

app.get('/speakers', function(req,res) {
  var info = '';

  dataFile.speakers.forEach(function(item){
    info += `
    <li>
      <h2>${item.name}</h2>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
    </li>
    `
  })

  // res.send('<h1>Nice meetups!</h1>');
  res.send(`
    ${info}
    `
  );
});

app.get('/speakers/:speakerid', function(req,res) {

  var speaker = dataFile.speakers[req.params.speakerid];

  // res.send('<h1>Nice meetups!</h1>');
  res.send(`
    <h2>${speaker.name}</h2>
    <h3>${speaker.title}</h3>
    <p>${speaker.summary}</p>
    `
  );
});

module.exports = router; 
