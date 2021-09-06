const {Router} = require('express');
const router = Router();

const AuthController = require('../controllers/AuthController');




router.get('/signup',AuthController.SignUp);

module.exports = router;