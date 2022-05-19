import React, { useState } from "react";
import "./Card.css";
import BgImg from "./xray-background.png";
import Xray from "./xray.jpg";

function Card(props) {
  const [hover, setHover] = useState(false);
  return (
    <div className="container__cardbox">
      <div
        onClick={props.onClick}
        className="background"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={{
          backgroundImage: hover ? `url(${Xray})` : `url(${BgImg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          transition: "background-image 0.5s ease",
          cursor: "pointer",
          position: "relative",
          opacity: hover ? 0.9 : 1,
          color: "white",
        }}
      >
        <div
          className="displayover"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            left: "0",
            position: "absolute",
            top: "0",
            width: "100%",
            // zIndex: 2,
            // transition: "background-color 350ms ease",
            // backgroundColor: hover ? "rgba(0,0,0,.5)" : "transparent",
            backgroundColor: "transparent",
            padding: "20px 20px 0 20px",
            // boxSizing: "border-box",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              fontFamily: "Helvetica",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {props.name}
          </p>

          <div
            className="hover"
            style={{
              opacity: hover ? 1 : 0,
              transition: "opacity 350ms ease",
            }}
          >
            {/* <p
              style={{
                fontFamily: "Helvetica",
                transform: hover
                  ? "translate3d(0,50px,0)"
                  : "translate3d(0,100px,0)",
                transition: "transform 350ms ease",
              }}
            >
              Check this out
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
