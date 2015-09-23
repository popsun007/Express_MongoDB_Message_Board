var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/message_board');
var Schema = mongoose.Schema;
var comments = new mongoose.Schema({
	_post: {type: Schema.ObjectId, ref: 'Post'},
	name:String,
	text: String,
	created_at: {type: Date, default: new Date}
});

module.exports = mongoose.model("Comments", comments);