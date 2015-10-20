var express = require("express");
var server = express();

var bodyParser = require("body-parser");

server.use("/", express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", function(req, res){
    res.sendFile("public/index.html");
});

server.listen(3030);
    console.log("You're handsome");
