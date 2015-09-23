var postController = require('../servers/controllers/posts.js');
module.exports = function(app)
	{
		app.get("/", function(req, res)
		{
			postController.show(req, res);
			postController.show_comment(req, res);
		});
		app.post("/add_post", function(req,res)
		{
			postController.add_post(req, res);
		})
		app.post("/add_comment/:id", function(req,res)
		{
			postController.add_comment(req, res);
		})
	};