var express = require('express');
var dataFile = require('./data/data.json');

app.get('/', function(req,res) {

  // res.send('<h1>Nice meetups!</h1>');
  res.send(`
    <h1>Check out all my peeps!</h1>
    `
  );
});
