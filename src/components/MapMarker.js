import React from "react";
import "./MapMarker.css";

function MapMarker(props) {
  return <div className="marker">{props.text}</div>;
}

export default MapMarker;
