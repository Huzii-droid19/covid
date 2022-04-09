import React, { useState } from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/user.api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              className="input"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="card__field__container">
            <p id="label">Enter your password</p>
            <input
              type="password"
              required
              className="input"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
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
          size="small"
          onClick={() => {
            login(email, password, navigate);
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
