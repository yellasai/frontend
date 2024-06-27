import React from "react";
import "./Css/loginsignup.css";

const LoginSignup = () => {
  return (
    <div className="login-sign-in">
      <div className="login-sign-in-container">
        <h1>Sign Up</h1>
        <div className="login-sign-in-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login-sign-up-login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="login-sign-up-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
