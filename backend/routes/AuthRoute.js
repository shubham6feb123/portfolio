const {Router} = require('express');
const router = Router();

const AuthController = require('../controllers/AuthController');




router.get('/',AuthController.SignUp);

module.exports = router;