var express = require("express");
var server = express();
var Comment = require("./models/comments.js");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//connect to a database
mongoose.connect("mongodb://localhost/forumdatabase");

server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", function(req, res){
    res.sendFile("public/index.html");
});

//get forum
server.get("/api/comments", function(req, res){
  var comments = Comment.find({}, function(err, comments){
      if(err){
        console.log(err);
      }

      res.json(comments);
  });
});

server.post("/api/comments", function(req, res){
    var comment = new Comment({
      firstName: req.body.firstName,
      lastInitial: req.body.lastInitial,
      testimonial: req.body.testimonial
    });

    comment.save(function(err){
        if(err){
          console.log(err);
        }
        console.log(comment);
        res.json(comment);
    });
});

server.get("/api/comments/:id", function(req, res){
    Comment.find({_id: req.params.id}, function(err, todo){
      if(err){
        console.log(err);
      }
      res.json(comment);
    });
});

server.delete("/api/comments/:id", function(req, res){
   User.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        }
       res.json({message: "Comment successfully removed"});

   });
});

server.listen(3030);
    console.log("You're handsome");
