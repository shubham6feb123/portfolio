const jwt = require("jsonwebtoken");
const VerifyUserMiddleware = (req,res,next)=>{
    const {token} = req.headers;
    // console.log("from verify middleware",token)
    if(!token){
        res.status(401).json({error:"Please authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token,process.env.JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).json({verified:false});
    }
    }
    
 module.exports = {VerifyUserMiddleware};