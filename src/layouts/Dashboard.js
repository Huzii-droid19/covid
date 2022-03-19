import React from "react";
import "./Dashboard.css";
import InfoBox from "../components/InfoBox";
import LineChart from "../components/LineChart";
import RootTable from "../components/RootTable";
import Header from "../components/Header";
function Dashboard() {
  const sx = {
    width: "90%",
    overflow: "hidden",
    marginTop: "30px",
    borderRadius: 2,
  };
  const columns = [
    {
      id: "country",
      label: "Country",
    },
    {
      id: "stat",
      label: "Stats",
    },
  ];
  const rows = [
    {
      country: "Russia",
      stat: 1321133,
    },
    {
      country: "USA",
      stat: 232131243,
    },
  ];
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__banner">
          <Header header_label="Dashboard" name="Nuts" />
          <div className="dashboard__info__row">
            <InfoBox cases="23232423" label="Confirmed" />
            <InfoBox cases="23232423" label="Active" />
            <InfoBox cases="23232423" label="Recovered" />
            <InfoBox cases="23232423" label="Death" />
          </div>
        </div>

        <div className="dashboard__stat__row">
          <div className="dashboard__stat">
            <h2 id="label">World Data Stats</h2>
            <LineChart />
          </div>
          <div className="dashboard__world">
            <h2 id="label">Country Wise Stats</h2>
            <RootTable sx={sx} columns={columns} rows={rows} />
          </div>
        </div>

        <div className="dashboard__stat__row">
          <div className="dashboard__stat">
            <h2 id="label">World Data Stats</h2>
            <LineChart />
          </div>
          <div className="dashboard__world">
            <h2 id="label">Country Wise Stats</h2>
            <RootTable sx={sx} columns={columns} rows={rows} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
