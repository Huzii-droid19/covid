import React from "react";
import Header from "../../../components/Header";
import InfoBox from "../../../components/InfoBox";
import "./HRCT.css";

function HRCT() {
  const [selected, setSelected] = React.useState(false);
  return (
    <div className="prediction">
      <div className="prediction__header">
        <Header header_label="HRCT Prediction" name="Nuts" />
      </div>
      <div className="prediction__container"></div>
    </div>
  );
}

export default HRCT;
