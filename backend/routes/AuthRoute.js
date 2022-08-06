const {Router} = require('express');
const router = Router();

//Controller
const AuthController = require('../controllers/AuthController');

//Middleware
const {SignUpMiddleware} = require('../middlewares/AuthMiddleware');
const {VerifyUserMiddleware} = require('../middlewares/VerifyUserMiddleware');

router.post('/signup',SignUpMiddleware,AuthController.SignUp);
router.post('/signin',SignUpMiddleware,AuthController.SignIn);
router.post('/verifyUser',VerifyUserMiddleware,AuthController.VerifyUser);

module.exports = router;