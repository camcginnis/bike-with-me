var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    firstName: String,
    lastName: String,
    stories: String
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
