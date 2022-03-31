import React from "react";
import "./Tile.css";

function Tile(props) {
  return (
    <div className="tile">
      <div className="tile__info">
        <span>{props.icon}</span>
        <p id="tile-label">{props.label}</p>
        <p id="tile-description">{props.description}</p>
        <a href={props.link} id="tile-link">
          {props.link_label}
        </a>
      </div>
    </div>
  );
}

export default Tile;
