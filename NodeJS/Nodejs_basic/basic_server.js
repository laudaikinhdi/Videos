var http = require("http");

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello, basic server");
	res.end();
});

server.listen(3000, function(){
	console.log("Server running port 3000");
});