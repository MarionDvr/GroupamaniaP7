const Post = require('../models/Post');

//AFFICHER TOUS les posts
exports.getAllPosts = (req, res) => {
    Post.find()
      .then((posts) => res.status(200).json(posts))
      .catch(error => res.status(400).json({ error }));
  };
//AFFICHER UN post
exports.getOnePost = (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
};
//CREER un post
exports.createPost = (req, res) => {
  const postObject = req.body;
  const post = new Post({
  //faire une copie de tous les élements de req.body.sauce
    ...postObject,
  //Chemin de l'image
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  });
  post.save()
    .then(() => { res.status(201).json({ message: 'Post enregistré' })})
    .catch(error => {res.status(400).json({ error }), console.log('error:', error)});
};

//MODIFIER un post
exports.modifyPost = (req, res) => {
  //Voir si le req.file existe déjà
  const postObject = req.file ? {
  //Obtenir un objet utilisable avec JSON.parse
    ...JSON.parse(req.body.post),
  //Ajout d'une nouvelle image
   imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  //Sinon on traite req.body
  } : { ...req.body  };
  //Suppression de userId pour la crétion du post
  delete postObject._userId;
  Post.findOne({ _id: req.params.id })
    .then (post => {
      //Si l'utilisateur n'est pas celui qui a créé le post
      if(post.userId != req.auth.userId) {
        res.status(401).json({ message: "non autorisé" });
      } else {
      //Sinon mise à jour de la BDD
        Post.updateOne({ _id: req.params.id }, {...postObject, _id: req.params.id })
          .then(() => { res.status(200).json({ message: "Post modifié" }); })
          .catch( error => { res.status(400).json({ error })});
      }
    })

  };

//SUPPRIMER un post
exports.deletePost = (req, res) => {
  Post.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Post supprimé" }))
    .catch( error => { res.status(400).json({ error })});
};

//LIKER, UNLIKER un post
exports.likePost = (req, res) => {
  //Like
  if(req.body.like === 1) {
    Post.updateOne({ _id: req.params.id },
      {
        $inc: {likes: +1},
        $push: { usersLiked: req.body.userId }
      })
      .then((post) => res.status(200).json({ message: "Like ajouté" }))
      .catch((error) => res.status(400).json({ error }));
  } else {
    //Unlike
      Post.updateOne({ _id: req.params.id },
        {
          $inc: { likes: -1 },
          $pull: { usersLiked: req.body.userId }
        })
        .then((post) => res.status(200).json({ message: "Like enlevé" }))
        .catch( (error) => res.status(400).json({ error }));
  }
};
