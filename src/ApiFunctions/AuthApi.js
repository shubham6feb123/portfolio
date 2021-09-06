import axios from "axios";

//signup request
const signUpRequest = ()=>{
return axios.get("https://5000-salmon-marmoset-khsapgrk.ws-us15.gitpod.io/api/signup");
}

export {signUpRequest};