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



server.listen(3030);
    console.log("You're handsome");


    // //API Routes
    // //get todos
    // server.get("/api/todos", function(req, res){
    //     var todos = Todo.find({}, function(err, todos){
    //         if(err){
    //             console.log(err);
    //         }
    //
    //         res.json(todos);
    //     })
    // });
    //
    // server.post("/api/todos", function(req, res){
    //     var todo = new Todo({
    //        title: req.body.title,
    //         body: req.body.body
    //     });
    //
    //     todo.save(function(err){
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log(todo);
    //         res.json(todo);
    //     });
    // });
    //
    // server.get("/api/todos/:id", function(req, res){
    //     Todo.find({_id: req.params.id}, function(err, todo){
    //     if(err){
    //       console.log(err);
    //     }
    //     res.json(todo);
    //   });
    // });
    //
    // server.delete("/api/todos/:id", function(req, res){
    //     Todo.findByIdAndRemove(req.params.id, function(err){
    //         if(err){
    //             console.log(err);
    //         }
    //         res.json({message: "Successfully deleted todo"});
    //     });
    // });
