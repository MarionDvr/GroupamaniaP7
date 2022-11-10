const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signin', userCtrl.signin);
router.post('/login', userCtrl.login);
router.put('/modify', userCtrl.ModifyUser);

module.exports = router;