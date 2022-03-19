import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div
      className="landing__container"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <img src="/assets/login-bg.png" alt="icon" />
      <h1 onClick={() => navigate("login")}>Login</h1>
    </div>
  );
}

export default LandingPage;
