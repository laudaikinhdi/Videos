var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");
var session = require("express-session");
// mysqld --skip-grant-tables
var socketio = require("socket.io");
// <%-  %> = {!!  !!}
var app = express();
// body parser
app.use(bodyParser.json()); //chuyển về dạng json
app.use(bodyParser.urlencoded({ extended: true }));  // lấy data từ form

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.get("secert_key"),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);
var host = config.get("server.host");
var port = config.get("server.port");

var server = app.listen(port, host, function(){
    console.log("Running port", port);
});

var io = socketio(server);

var socketcontroller = require("./apps/common/socketcontroller")(io);