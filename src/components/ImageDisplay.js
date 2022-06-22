import React from "react";
import "./ImageDisplay.css";
import { CircularProgress } from "@mui/material";

function ImageDisplay({ label, file, filename, button, isLoading, result }) {
  return (
    <div className="container">
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {label}
      </span>
      {isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <>
          <div
            className="image__display"
            style={{
              backgroundImage: `url(${file})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "70%",
              width: "100%",
            }}
          ></div>
          <div className="image__info">
            <h3>{filename}</h3>
            <p id="details">{result}</p>
          </div>
          {button}
        </>
      )}
    </div>
  );
}

export default ImageDisplay;
