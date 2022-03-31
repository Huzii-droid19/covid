import React, { useState } from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login__container">
      <img src="/assets/icon.jpeg" alt="icon" id="icon-image" />
      <h1>{"Login to your account"}</h1>
      <div className="login__container__card">
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
          <p id="register" onClick={() => navigate("/signup")}>
            Don't have an account? Register here
          </p>
        </div>
        <Button
          variant="contained"
          color="primary"
          id="button"
          size="large"
          onClick={() => navigate("/main/dashboard")}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
