//3 initial steps
//1. import modules
//2. create server
//3. Read request and return response

//Import required modules
var http=require("http");

http.createServer(function(request,response){

//200 - OK
    response.writeHead(200,{'Context-Type': 'text/plain'});
    response.end('hello world!\n');

}).listen(8081);

console.log("lalalla server working");