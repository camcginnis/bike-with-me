var express = require("express");
var server = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

server.use("/", express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", function(req, res){
    res.sendFile("public/index.html");
});

//get forum
server.get("/api/forum", function(req, res){
  var comments = Comment.find({}, function(err, comments){
      if(err){
        console.log(err);
      }

      res.json(comments);
  })
});

server.post("/api/forum", function(req, res){
    var comment = new Comment({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      testimonial: req.body.testimonial
    })

    comment.save(function(err){
        if(err){
          console.log(err);
        }
        console.log(comment);
        res.json(comment);
    });
});

server.get("/api/forum/:id", function(req, res){
    Comment.find({_id: req.params.id}, function(err, todo){
      if(err){
        console.log(err);
      }
      res.json(comment);
    });
});

server.delete("/api/forum/:id", function(req, res){
    Comment.findByIdAndRemove(req.params.id, function(err){
        if(err){
          console.log
        }
        res.json({message: "Successfully deleted comment"});
    });
});

server.listen(3030);
    console.log("You're handsome");
