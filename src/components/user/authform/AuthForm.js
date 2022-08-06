import React, { useState } from "react";
import "./authForm.css";

//images
import man from "../signup/man.svg";
import Email from "../signup/email.png";
import lock from "../signup/lock.png";
import showpass from "../signup/showpass.gif";

//apiFunctions
import { signUpRequest,signInRequest } from "../../../ApiFunctions/AuthApi";

function AuthForm({ email, signUp }) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    username: "",
    emailAddress: "",
    password: "",
  });

  //hide and show password
  const showPassword = () => {
    setShow((prev) => !prev);
  };

  //saving userDetails
  let name, value;
  const userDetails = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  //sending userDetails
  const sendDetails = (e) => {
    console.log("sending", user);
    console.log(e.target.innerText);
    if (e.target.innerText === "Sign Up") {
      signUpRequest(user.username, user.emailAddress, user.password)
        .then((res) => {
          console.log("api", res)
          window.localStorage.setItem("authtoken",res.data.authtoken)
      })
        .catch((err) => console.log("signup error",err));
    }else{
      signInRequest(user.username, user.password)
        .then((res) => {
          console.log("api sign in", res)
          window.localStorage.setItem("authtoken",res.data.authtoken)
      })
        .catch((err) => console.log("signin error",err));
    }
  };

  return (
    <div className="auth__form">
      <div className="username">
        <div className="username__img">
          <img src={man} alt="username" />
        </div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={userDetails}
        />
      </div>
      {email ? (
        <div className="email">
          <div className="email__img">
            <img src={Email} alt="email" />
          </div>
          <input
            type="email"
            name="emailAddress"
            placeholder="email"
            onChange={userDetails}
          />
        </div>
      ) : (
        ""
      )}
      <div className="password">
        <div className="password__img">
          <img src={lock} alt="password" />
        </div>
        <input
          type={show ? "text" : "password"}
          name="password"
          placeholder="password"
          onChange={userDetails}
        />
        <div className="showpassword__img">
          <img src={showpass} alt="show" onClick={showPassword} />
        </div>
      </div>
      <div className="submit">
        <button type="submit" onClick={sendDetails}>
          {signUp ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
