import React, { useEffect } from "react";
import "./Dashboard.css";
import InfoBox from "../components/InfoBox";
import LineChart from "../components/LineChart";
import RootTable from "../components/RootTable";
import Header from "../components/Header";
import { getCovidInfo } from "../api/data.api";
function Dashboard() {
  const [covidInfo, setCovidInfo] = React.useState({});

  const sx = {
    width: "90%",
    overflow: "hidden",
    marginTop: "30px",
    borderRadius: 2,
  };
  useEffect(() => {
    getCovidInfo(setCovidInfo);
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__banner">
          <Header header_label="Dashboard" />
          <div className="dashboard__info__row">
            <InfoBox cases={covidInfo?.cases} label="Confirmed" />
            <InfoBox cases={covidInfo?.active} label="Active" />
            <InfoBox cases={covidInfo?.recovered} label="Recovered" />
            <InfoBox cases={covidInfo?.deaths} label="Death" />
          </div>
        </div>
        <div className="dashboard__stat__row">
          <div className="dashboard__stat">
            <h2 id="label">World Data Stats</h2>
            <LineChart />
          </div>
          <div className="dashboard__world">
            <h2 id="label">Country Wise Stats</h2>
            <RootTable sx={sx} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
