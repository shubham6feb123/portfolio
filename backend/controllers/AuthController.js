const SignUp = (req,res)=>{
    const {username,email,password} = req.body;
    console.log(req.body);
res.json({
    status:"Ok"
})
}

const SignIn = ()=>{

}

module.exports = {SignUp,SignIn};



