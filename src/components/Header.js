import React from "react";
import "./Header.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/user.api";

function Header(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    getUser(setUser);
  }, []);

  const open = Boolean(anchorEl);
  return (
    <div className="header">
      <p>{props.header_label}</p>
      <div className="profile">
        <IconButton
          variant="outlined"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <BsFillPersonFill size={30} />
        </IconButton>
        <p
          style={{
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {Object.keys(user).length > 0 ? user.name : ""}
        </p>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              navigate("/main/profile");
            }}
          >
            Profile
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Contact Us</MenuItem>
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              navigate("/login");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
