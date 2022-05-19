import React from "react";
import Card from "../../components/Card";
import "./Prediction.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function Prediction() {
  const navigate = useNavigate();

  return (
    <div className="container__card">
      <Header header_label="Prediction" name="Nuts" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div className="card__row">
          <Card name="HRCT" onClick={() => navigate("/main/hrct")} />
          <Card name="XRAY" onClick={() => navigate("/main/xray")} />
          <Card
            name="Symptoms Analysis"
            onClick={() => navigate("/main/symptoms-analysis")}
          />
        </div>
      </div>
    </div>
  );
}

export default Prediction;
