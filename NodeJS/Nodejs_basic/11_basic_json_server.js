var http = require("http");

var server = http.createServer(function(req, res){
    console.log(req.url);
    console.log(req.method);

    var data = {
        "status": 200,
        "message": "Web JSON",
        "err": false
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(3000, function(){
    console.log("Running server port 3000");
});