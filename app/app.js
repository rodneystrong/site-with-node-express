var express = require('express');
var dataFile = require('./data/data.json');

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('appData', dataFile);

//in the line below, we're using express.static to designate app/public to
//be available to any of our docs. this means i can now go into
//app/routes/index.js and access app/public/images 
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

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
