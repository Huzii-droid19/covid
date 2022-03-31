import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="login__container">
      <img src="/assets/icon.jpeg" alt="icon" id="icon-image" />
      <h1>{"Register Account"}</h1>

      <div className="login__container__card">
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
          onClick={() => navigate("/login")}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default Signup;
