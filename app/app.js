var http = require('http');

//req and res stand for request and response
var myServer = http.createServer(function(req,res) {
  res.writeHead(200, {'content-type' : 'text/plain'});

  //now we send a response back
  res.write('nice meetups');
  //the next line lets us know the response is done
  res.end();



});

myServer.listen(3000);
