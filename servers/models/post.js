var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var posts = new mongoose.Schema({
	name: String,
	content: String,
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

posts.path('name').required(true, 'User name cannot be blank');
posts.path('content').required(true, 'Post cannot be blank');
module.exports = mongoose.model("Posts", posts);
