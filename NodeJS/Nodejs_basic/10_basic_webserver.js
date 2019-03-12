var http = require("http");

var server = http.createServer(function(req, res){
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.write("This is website with NodeJS");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>This is website with NodeJS</h1>");
    res.end();
});

server.listen(3000, function(){
    console.log("Web server running port 3000");
});