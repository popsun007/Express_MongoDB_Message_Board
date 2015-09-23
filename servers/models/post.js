var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
var Schema = mongoose.Schema;
var posts = new mongoose.Schema({
	name: String,
	content: String,
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});


module.exports = mongoose.model("Posts", posts);
