const express = require('express');
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/multer-config');

router.get('/', auth, postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);
router.post('/', auth, multer, postCtrl.createPost);
router.put('/:id', auth, multer,postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.post('/:id/like', auth, postCtrl.likePost);

module.exports = router;