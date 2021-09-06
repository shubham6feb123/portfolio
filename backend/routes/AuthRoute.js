const {Router} = require('express');
const router = Router();

//Controller
const AuthController = require('../controllers/AuthController');

//Middleware
const {SignUpMiddleware} = require('../middlewares/AuthMiddleware');


router.post('/signup',SignUpMiddleware,AuthController.SignUp);

module.exports = router;