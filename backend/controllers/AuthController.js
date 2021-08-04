const SignUp = (req,res)=>{
    const {username,email,password} = req.body;
res.send("Hello user")
}

const SignIn = ()=>{



}

module.exports = {SignUp,SignIn};



