const Post = require('../models/Post');

//AFFICHER TOUS les posts
exports.getAllPosts = (req, res, next) => {
    Post.find()
      .then((posts) => res.status(200).json(posts))
      .catch(error => res.status(400).json({ error }));
  };