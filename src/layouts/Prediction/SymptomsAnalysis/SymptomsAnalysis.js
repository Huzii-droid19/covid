import React from "react";
import { Button } from "@mui/material";
import "./SymptomsAnalysis.css";
import Header from "../../../components/Header";

function SymptomsAnalysis() {
  return (
    <div className="analysis">
      <div className="analysis__header">
        <Header header_label="Symptoms Analysis" name="Nuts" />
      </div>
      <div className="analysis__container">
        <div className="analysis__container__col">
          <div className="analysis__container__col__row">
            <h3 id="label">{`Oxygen\u00A0Level`}</h3>
            <select id="selection">
              <option>Normal</option>
              <option>Low</option>
              <option>High</option>
            </select>
          </div>
          <div className="analysis__container__col__row">
            <h3 id="label">Cough</h3>
            <select id="selection">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="analysis__container__col">
          <div className="analysis__container__col__row">
            <h3 id="label">Fever</h3>
            <input type="number" placeholder="Enter Fever °C" id="input" />
          </div>
          <div className="analysis__container__col__row">
            <h3 id="label">Pneumonia</h3>
            <select id="selection">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
      </div>
      <Button variant="contained" color="primary">
        Analyze
      </Button>
    </div>
  );
}

export default SymptomsAnalysis;
