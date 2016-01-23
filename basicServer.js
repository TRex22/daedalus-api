//Basic server to get this to Work

var http = require('http');
var pjson = require('./package.json');
var program = require('commander');

program
	.version(pjson.version)
	.option('-p, --port <port>', 'Port on which to listen to (defaults to 49394)', parseInt)
	.parse(process.argv);

var port = program.port || 49394;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);
console.log('Welcome to webbot version: '+ pjson.version);
//Lets start our server
server.listen(port, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", port);
});
