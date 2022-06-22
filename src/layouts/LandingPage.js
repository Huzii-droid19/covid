import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Tile from "../components/Tile";
import { ImLocation } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import AlertModal from "../components/Modal";

function LandingPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container__box">
      <div className="container__login">
        <span>
          <h3 id="header">Covid Envisage</h3>
        </span>
        <div className="login__button">
          <Button
            color="primary"
            size="small"
            onClick={() => navigate("login")}
          >
            Login
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={() => navigate("signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className="tile__container">
        <div className="feature">
          <p id="feature-label">Features</p>
          <p id="feature-description">
            Our applicaiton aim to provide better features and user experience
            <br />
            to our users, but it is not limited
          </p>
        </div>
        <div className="tile__row">
          <Tile
            icon={<ImLocation size={50} color="#1597E5" />}
            label="Convenient Locations"
            description="Our application provide services to all locations"
            link_label="Learn More>>>"
            link="#"
          />
          <Tile
            icon={<BiTimeFive size={50} color="#1597E5" />}
            label="Always Avaliable"
            description="We aimed to provide this service 24/7 online to help fight back against covid-19"
            link_label="Learn More>>>"
            link="#"
          />
          <Tile
            icon={<IoIosStats size={50} color="#1597E5" />}
            label="Online Results"
            description="Our application aims to provide accurate and online results to our users"
            link_label="Learn More>>>"
            link="#"
          />
        </div>
        <div className="tile__row">
          <Tile
            icon={<ImLocation size={50} color="#1597E5" />}
            label="Convenient Locations"
            description="Our application provide services to all locations"
            link_label="Learn More>>>"
            link="#"
          />
          <Tile
            icon={<BiTimeFive size={50} color="#1597E5" />}
            label="Always Avaliable"
            description="We aimed to provide this service 24/7 online to help fight back against covid-19"
            link_label="Learn More>>>"
            link="#"
          />
          <Tile
            icon={<IoIosStats size={50} color="#1597E5" />}
            label="Online Results"
            description="Our application aims to provide accurate and online results to our users"
            link_label="Learn More>>>"
            link="#"
          />
        </div>
      </div>
      <AlertModal
        open={open}
        setOpen={setOpen}
        label="Disclaimer"
        result={` This is research based project, we dont cliam any responsibility
              for any data that we collect and any test we perform`}
        btnLabel="I, Accept"
      />
    </div>
  );
}

export default LandingPage;
