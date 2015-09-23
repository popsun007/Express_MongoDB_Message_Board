var Posts = require('../models/post.js');
var Comment = require('../models/comment.js');

var postController = {};

postController.show = function(req, res)
	{
		Posts.find({}, function(post_err, post_results)
		{
			Comment.find({}, function(com_err, comment_results)
			{
				if(post_err || com_err)
				{
					res.send("Show Comment/post error!");
				}
				else
				{
					res.render("main", {infos: post_results, comments: comment_results});
				}
			}).sort({created_at: -1});
		}).sort({_id: 1});
	}
postController.add_post = function(req, res)
	{
		var new_post = new Posts({
			name: req.body.name,
			content: req.body.content 
		})
		new_post.save(function(err)
		{
			if(err)
			{
				console.log("Error on add_post");
			}
			else
			{
				res.redirect('/');
			}
		})
	}
postController.add_comment = function(req, res)
	{
		// console.log(req.body.name_com);
		Posts.findOne({_id: req.params.id}, function(err, post)
			{
				var new_comment = new Comment({
					name: req.body.name_com,
					text: req.body.content_com
				});
				new_comment._post = post._id;
				post.comments.push(new_comment);
				new_comment.save(function(err)
				{
					post.save(function(err)
					{
						if(err)
						{
							console.log("Error at save comment");
						}
						else
						{
							res.redirect('/');
						}
					});
				});
			});
	}
postController.show_comment = function(req, res)
{

}
module.exports = postController;