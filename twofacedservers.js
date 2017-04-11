// http module, built in to node
var http = require("http");

//we need a port.  use caps and it will never change.  a constant variable? good practice to use something over 7000
// ports up to 1000 used by OS.  3036 used by mysql.
var PORTMEAN = 7500;
var PORTNICE = 7000;

// generic function to handle request and response
// request always comes first.  if you dont have a request, you cant get a response.
function handleRequestNice(req, res) {
  res.end("You're good enough, you're smart enough, and doggone it, people like you.");
}
function handleRequestMean(req, res) {
  res.end("You're weak, your bloodline is weak, and you will not survive the winter.");
}

// create server, handle request, return response
var serverNice = http.createServer(handleRequestNice);
var serverMean = http.createServer(handleRequestMean);

// listen
serverNice.listen(PORTNICE, function(){
});

serverMean.listen(PORTMEAN, function(){
});