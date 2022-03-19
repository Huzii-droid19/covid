import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import en from "../en.jpg";

function Header(props) {
  return (
    <div className="header">
      <p>{props.header_label}</p>
      <div className="profile">
        <p>{props.name}</p>
        <Avatar alt="Remy Sharp" src={en} />
      </div>
    </div>
  );
}

export default Header;
