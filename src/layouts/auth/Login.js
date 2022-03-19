import React, { useState } from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fadeInUp } from "react-animations";

import Radium, { StyleRoot } from "radium";

const styles = {
  shake: {
    animation: "x 5s",
    animationName: Radium.keyframes(fadeInUp, "bounce"),
  },
};

const RegisterCard = (props) => {
  return (
    <div className="login__container__card" style={styles.shake}>
      <div className="card__box">
        <div className="card__field__container">
          <p id="label">Enter Name</p>
          <input type="text" required id="input" placeholder="Enter name" />
        </div>
        <div className="card__field__container">
          <p id="label">Enter your email address</p>
          <input
            type="email"
            required
            id="input"
            placeholder="Enter your email"
          />
        </div>
        <div className="card__field__container">
          <p id="label">Enter your password</p>
          <input
            type="password"
            required
            id="input"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => props.setSendEmail(true)}
      >
        Register
      </Button>
    </div>
  );
};
const LoginCard = (props) => {
  return (
    <div className="login__container__card" style={styles.shake}>
      <div className="card__box">
        <div className="card__field__container">
          <p id="label">Enter your email</p>
          <input
            type="email"
            required
            id="input"
            placeholder="Enter your email address"
          />
        </div>
        <div className="card__field__container">
          <p id="label">Enter your password</p>
          <input
            type="password"
            required
            id="input"
            placeholder="Enter your password"
          />
        </div>
        <p id="register" onClick={() => props.setLoginCard(false)}>
          Don't have an account? Register here
        </p>
      </div>
      <Button
        variant="contained"
        color="primary"
        id="button"
        size="large"
        onClick={() => props.navigate("/main/dashboard")}
      >
        Login
      </Button>
    </div>
  );
};

function Login() {
  const [loginCard, setLoginCard] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="login__container">
      <img src="/assets/icon.jpeg" alt="icon" id="icon-image" />
      <h1>{loginCard ? "Login to your account" : "Register Account"}</h1>
      {loginCard ? (
        <LoginCard setLoginCard={setLoginCard} navigate={navigate} />
      ) : (
        <RegisterCard setSendEmail={setLoginCard} />
      )}
    </div>
  );
}

export default Login;
