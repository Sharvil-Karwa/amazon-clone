import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import firebaseApp from "./firebase";

function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(firebaseApp);
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.email);
        Navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://i2-prod.dublinlive.ie/incoming/article15384961.ece/ALTERNATES/s615/0_Amazon-logo.jpg"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign in
          </button>
          <button className="login__registerButton" onClick={register}>
            Create your account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
