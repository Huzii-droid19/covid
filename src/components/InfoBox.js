import React from "react";
import "./InfoBox.css";
import { BsPerson } from "react-icons/bs";
function InfoBox(props) {
  return (
    <>
      <div className="box">
        <BsPerson size={35} color="#eeeeee" />
        <div className="box__details">
          <strong>
            <p id="box-label">{props.label}</p>
          </strong>
          <p id="box-stat">{props.cases}</p>
        </div>
      </div>
    </>
  );
}

export default InfoBox;
