const express = require('express');
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/multer-config');

//Créer un user
router.post('/signin', userCtrl.signin);
//Connexion d'un user
router.post('/login', userCtrl.login);
//Modification d'un user
router.put('/modify', userCtrl.modifyUser);
//Récupérer un user
router.get('/users/:id', auth, multer, userCtrl.getUser);
//Récupérer tous les users
router.get('/users', auth, multer, userCtrl.getAllUsers);

module.exports = router;