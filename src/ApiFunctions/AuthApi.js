import AxiosInstance from "./AxiosInstance";

//signup request
const signUpRequest = (username,email,password)=>{
return AxiosInstance.post("http://localhost:5000/api/signup",{username,email,password});
}

export {signUpRequest};