const express = require('express');
const router  = express.Router();
const authController = require('../controllers/authController');

router.post('/login/user', authController.loginUser);
router.post('/login/admin', authController.loginAdmin);
router.post('/register',authController.register);
//router.post('/updateinfo', authController.verifyToken, authController.updateInfo);
module.exports = router;