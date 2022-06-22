import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./profile.css";
import { getUser } from "../../api/user.api";
import { getTestingRecords } from "../../api/prediction";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHead, Divider } from "@mui/material";

function Profile() {
  const [user, setUser] = useState({});
  const [record, setRecord] = useState([]);
  useEffect(() => {
    getUser(setUser);
    getTestingRecords(setRecord);
  }, []);
  const style = {
    fontSize: "1rem",
    fontWeight: "bold",
  };
  const container = {
    width: "100%",
    maxHeight: "370px",
    marginBottom: "40px",
  };
  return (
    <div className="user__profile">
      <Header header_label="Profile" name="Nuts" />
      <div className="user__profile__info">
        {Object.keys(user).length > 0 ? (
          <div style={{ width: "100%" }}>
            <div className="user__profile__info__container">
              <div className="user__profile__info__col">
                <strong>
                  <p>Name</p>
                </strong>
              </div>
              <div
                className="user__profile__info__col"
                style={{
                  marginBottom: 15,
                }}
              >
                <p>{user.name}</p>
              </div>
            </div>
            <Divider />
            <div className="user__profile__info__container">
              <div className="user__profile__info__col">
                <strong>
                  <p>Email</p>
                </strong>
              </div>
              <div
                className="user__profile__info__col"
                style={{
                  marginBottom: 15,
                }}
              >
                <p>{user.email}</p>
              </div>
            </div>
            <Divider />
            <div style={{ marginLeft: 20, marginRight: 20, paddingTop: 20 }}>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={style}>Serial No</TableCell>
                        <TableCell style={style}>Prediction Type</TableCell>
                        <TableCell style={style}>Predicted Sample</TableCell>
                        <TableCell style={style}>Details</TableCell>
                        <TableCell style={style}>Result</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {record.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>
                            <a
                              href={item.sample}
                              target="_blank"
                              rel="noreferrer"
                            >
                              See Sample
                            </a>
                          </TableCell>
                          <TableCell>{item.details}</TableCell>
                          <TableCell>
                            {item.result ? "Covid" : "Normal"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
          </div>
        ) : (
          <div className="user__profile__progress">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
