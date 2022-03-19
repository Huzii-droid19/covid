import React from "react";
import "./Main.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TestingCenter from "./layouts/Centers/TestingCenter";
import VaccinationCenter from "./layouts/Centers/VaccinationCenter";
import Dashboard from "./layouts/Dashboard";
import HRCT from "./layouts/Prediction/HRCT/HRCT";
import SymptomsAnalysis from "./layouts/Prediction/SymptomsAnalysis/SymptomsAnalysis";

function Main() {
  return (
    <div className="main">
      <div className="main__sidebar">
        <Sidebar />
      </div>
      <div className="main__content">
        {/* <Header /> */}
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="hrct" element={<HRCT />} />
          <Route path="symptoms-analysis" element={<SymptomsAnalysis />} />
          <Route path="vaccination" element={<VaccinationCenter />} />
          <Route path="testing" element={<TestingCenter />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
