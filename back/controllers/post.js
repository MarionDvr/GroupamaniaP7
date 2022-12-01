const Post = require('../models/Post');

//AFFICHER TOUS les posts
exports.getAllPosts = (req, res) => {
    Post.find()
      .then((posts) => res.status(200).json(posts))
      .catch(error => res.status(400).json({ error }));
  };

//CREER un post
exports.createPost = (req, res) => {
  //Obtenir un objet utilisable grâce à JSON.parse
  const postObject = JSON.parse(req.body.post);
  //Suppression de l'id sauce et de l'id utilisateur (pour ne pas donné la possibilité aux utilisateurs malveillant d'en insérer un mauvais), il sera remplacé par celui du token
  delete postObject._id;
  delete postObject.userId;
  const post = new Post({
  //faire une copie de tous les élements de req.body.sauce
    ...postObject,
    userId: req.auth.userId,
  //Chemin de l'image
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0, 
    usersLiked: []
  });
  post.save()
    .then(() => { res.status(201).json({ message: 'Post enregistré' })})
    .catch(error => {res.status(400).json({ error }), console.log('error:', error)});

};