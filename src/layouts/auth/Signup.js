import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { signUp } from "../../api/user.api";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div className="login__container">
      <img src="/assets/icon.jpeg" alt="icon" id="icon-image" />
      <h1>{"Register Account"}</h1>

      <div className="login__container__card">
        <div className="card__box">
          <div className="card__field__container">
            <p id="label">Enter Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input"
              placeholder="Enter name"
            />
          </div>
          <div className="card__field__container">
            <p id="label">Enter your email address</p>
            <input
              type="email"
              required
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="card__field__container">
            <p id="label">Enter your password</p>
            <input
              type="password"
              required
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <Button
          id="button"
          variant="contained"
          color="primary"
          size="small"
          onClick={() => signUp(name, email, password, navigate)}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default Signup;
