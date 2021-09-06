import axios from "axios";

//signup request
const signUpRequest = (username,email,password)=>{
return axios.post("https://5000-salmon-marmoset-khsapgrk.ws-us15.gitpod.io/api/signup",{username,email,password});
}

export {signUpRequest};