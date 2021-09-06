const { body, validationResult } = require('express-validator');

const SignUpMiddleware = (req,res,next)=>{

console.log("Middleware working");
console.log(req.body)
res.json({error:"error in payload"})
next();
}

module.exports = {SignUpMiddleware};