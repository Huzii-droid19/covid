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
        // display: "flex",
        backgroundImage: `url("assets/xray-background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 onClick={() => navigate("login")} style={{ cursor: "pointer" }}>
        Click here
      </h1>
    </div>
  );
}

export default LandingPage;
