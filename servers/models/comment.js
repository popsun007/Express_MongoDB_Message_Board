var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var comments = new mongoose.Schema({
	_post: {type: Schema.ObjectId, ref: 'Post'},
	name:String,
	text: String,
	created_at: {type: Date, default: new Date}
});
comments.path("name").required(true, "Leave a name for your comment!");
comments.path("text").required(true, "comment can not be blank!!!");
module.exports = mongoose.model("Comments", comments);