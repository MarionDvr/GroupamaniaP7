const express = require('express');
const sauceCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const router = express.Router();
//const multer = require('../middleware/multer-config');

router.get('/', auth, postCtrl.getAllPosts);
//router.get('/:id', auth, postCtrl.getOnePost);
router.post('/', auth, multer, postCtrl.createPost);
//router.put('/:id', auth, multer,sauceCtrl.modifySauce);
//router.delete('/:id', auth, sauceCtrl.deleteSauce);
//router.post('/:id/like', auth, sauceCtrl.likeDislikeSauce);

module.exports = router;