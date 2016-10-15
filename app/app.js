var express = require('express');
var dataFile = require('./data/data.json');

var app = express();

app.set('port', process.env.PORT || 3000);


app.get('/', function(req,res) {

  // res.send('<h1>Nice meetups!</h1>');
  res.send(`
    <h1>Check out all my peeps!</h1>
    `
  );
});

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


var server = app.listen(app.get('port'), function() {
  console.log('Go to port ' + app.get('port') + ' in your browser');
});

/*The code below refers to the non-express way of doing things
var http = require('http');

//req and res stand for request and response
var myServer = http.createServer(function(req,res) {
  //the '200' is the status code we send back as a 'res' or response
  //to the user's header (hence the writeHead method)
  res.writeHead(200, {'content-type' : 'text/html'});

  //now we send a response back
  res.write('<h1>nice meetups</h1>');
  //the next line lets us know the response is done
  res.end();

});

myServer.listen(3000);
console.log('Go to localhost:3000 on your browser');
*/
