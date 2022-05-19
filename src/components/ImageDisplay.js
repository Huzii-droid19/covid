import React from "react";
import "./ImageDisplay.css";
import { Button } from "@mui/material";

function ImageDisplay(props) {
  return (
    <div className="container">
      <div
        className="image__display"
        style={{
          backgroundImage: `url(${props.file})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "70%",
          width: "100%",
        }}
      ></div>
      <div className="image__info">
        <h3>{props.filename}</h3>
        <p id="details">{props.result}</p>
      </div>
      {props.button}
    </div>
  );
}

export default ImageDisplay;
