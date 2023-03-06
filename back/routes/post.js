const express = require('express');
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/multer-config');

//Récupérer tous les posts
router.get('/', auth, postCtrl.getAllPosts);
//Récupérer un post
router.get('/:id', auth, postCtrl.getOnePost);
//Créer un post
router.post('/', auth, multer, postCtrl.createPost);
//Modifier un post
router.put('/:id', auth, multer,postCtrl.modifyPost);
//Supprimer un post
router.delete('/:id', auth, postCtrl.deletePost);
//Liker et unliker un post
router.post('/:id/like', auth, postCtrl.likePost);

module.exports = router;