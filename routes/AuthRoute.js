const express = require('express');
const { loginUser, signupUser,CreateUser } = require('../Controllers/authController');
const router = express.Router();

router.get('/Signup',signupUser);
router.get('/',loginUser);
router.get('/CreatUser',CreateUser);


module.exports = router;