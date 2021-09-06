const { body, validationResult } = require('express-validator');

const SignUp = (req,res)=>{
    const {username,email,password} = req.body;
    // console.log(req.body);

}

const SignIn = ()=>{

}

module.exports = {SignUp,SignIn};



