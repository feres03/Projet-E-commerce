const express = require('express');
const { register, login, forgotPassword, resetPassword } = require('../Controllers/AuthController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);
// router.post('/logout', LogOut)

module.exports = router