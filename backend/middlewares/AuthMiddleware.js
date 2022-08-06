const { body, validationResult } = require('express-validator');

const SignUpMiddleware = (req,res,next)=>{
next();
}

module.exports = {SignUpMiddleware};