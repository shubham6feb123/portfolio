const bcrypt = require("bcryptjs");
const User = require("../model/signUpSchema");
const jwt = require("jsonwebtoken");

const SignUp = async(req,res)=>{
  try{ 
       const {username,email,password} = req.body;
    console.log("from sign up controller",req.body);

    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const secPass = bcrypt.hashSync(password,salt);

    //creating a new user in our database
    const user = await User.create({
        username:username,
        password:secPass,
        email:email
    })

    const data = {
        user:{
            id:user._id
        }
    }
  const jwtData = jwt.sign(data,process.env.JWT_SECRET);

  console.log("jwt token",jwtData);
    console.log("user created",user);
    res.status(200).json({authtoken:jwtData});
}catch(e){
    res.status(500).json({message:"username or email already exist"});
    console.log("error from sign up",e)
}
}

const SignIn = async(req,res)=>{
   try {
    const {username,password} = req.body;
    const user = await User.findOne({username:username});
    const passCompare = bcrypt.compareSync(password,user.password);
    if(user&&passCompare){
        const data = {
            user:{
                id:user._id
            }
        }
      const jwtData = jwt.sign(data,process.env.JWT_SECRET);
        console.log("user exists",user,passCompare);
        res.status(200).json({authtoken:jwtData});
    }else{
        console.log("user not exists")
        res.status(400).json({message:"Please try to login with correct credentials"})
    }
   } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log("error from sign in",e)
   }
}

const VerifyUser = async(req,res)=>{
     try {
        // console.log("verifying user",req.user)
        const user = await User.findById(req.user.id);
        // console.log("user verified",user)
        res.status(200).json({verified:true})
     } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log("error from sign in",e)
     }

}

module.exports = {SignUp,SignIn,VerifyUser};



