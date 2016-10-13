var express = require('express');
var dataFile = require('./data/data.json');

var app = express();

app.set('port', process.env.PORT || 3000);


app.get('/', function(req,res) {
  var info = '';

  dataFile.speakers.forEach(function(item){
    info += `
    <li>
      <h2>${item.name}</h2>
    </li>
    <li>
      <h3>${item.title}</h3>
    </li>
    <li>
      <p>${item.summary}</p>
    </li>


    `
  })

  // res.send('<h1>Nice meetups!</h1>');
  res.send(

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
