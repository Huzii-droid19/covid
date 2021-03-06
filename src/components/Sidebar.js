import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineOnlinePrediction, MdBusinessCenter } from "react-icons/md";
import { BiStats, BiTestTube } from "react-icons/bi";
import { FaXRay, FaHandHoldingMedical } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { BsUpcScan } from "react-icons/bs";
import { Button } from "@mui/material";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar">
        <div>
          <div className="sidebar__name">
            <p>Covid Envisage</p>
          </div>
          <Navigation
            className="sidebar__navigation"
            // you can use your own router's api to get pathname
            activeItemId="/"
            onSelect={({ itemId }) => {
              // maybe push to the route
              // alert(`You selected ${itemId}`);
              navigate(itemId);
            }}
            items={[
              {
                title: "Dashboard",
                itemId: "/main/dashboard",
                elemBefore: () => <AiFillDashboard size={20} color="white" />,

                // you can use your own custom Icon component as well
                // icon is optional
              },
              {
                title: "Prediction",
                elemBefore: () => (
                  <MdOutlineOnlinePrediction size={20} color="white" />
                ),
                itemId: "/main/prediction",
                subNav: [
                  {
                    title: "HRCT Prediction",
                    itemId: "/main/hrct",
                    elemBefore: () => <BsUpcScan size={15} color="white" />,
                  },
                  {
                    title: "X-Ray Prediction",
                    itemId: "/main/xray",
                    elemBefore: () => <FaXRay size={15} color="white" />,
                  },
                  {
                    title: "Symptoms Analysis",
                    itemId: "/main/symptoms-analysis",
                    elemBefore: () => (
                      <SiGoogleanalytics size={15} color="white" />
                    ),
                  },
                ],
              },
              {
                title: "Centers",
                elemBefore: () => <MdBusinessCenter size={20} color="white" />,
                subNav: [
                  {
                    title: "Vaccination Centers",
                    itemId: "/main/vaccination",
                    elemBefore: () => (
                      <FaHandHoldingMedical size={15} color="white" />
                    ),
                  },
                  {
                    title: "Testing Centers",
                    itemId: "/main/testing",
                    elemBefore: () => <BiTestTube size={15} color="white" />,
                  },
                ],
              },
            ]}
          />
        </div>

        {/* <div className="vector">
          <Button
            style={{
              color: "white",
              // backgroundColor: "#21b6ae",

              fontSize: "18px",
            }}
            color="primary"
            size="large"
            onClick={() => navigate("/login")}
          >
            Logout
          </Button>
        </div> */}
      </div>
    </>
  );
}

export default Sidebar;
