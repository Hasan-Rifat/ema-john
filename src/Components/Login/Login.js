import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import img from "../../images/google.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation()

  const from = location?.state?.form?.pathname || '/'

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
      console.log('done');
    navigate(from, {replace: true});
  }
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading.....</p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="text-media">
          New to Ema-john?{" "}
          <Link to="/signup" className="form-link">
            Create New Account
          </Link>
        </p>
        <div className="divider-main">
          <div className="divider"></div>
          <p className="divider-text">or</p>
          <div className="divider"></div>
        </div>
        <div className="googleBtn">
          <img src={img} alt="" />
          <span>Continue with Google</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
