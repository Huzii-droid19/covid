import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./profile.css";
import { getUser } from "../../api/user.api";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHead, Divider } from "@mui/material";

function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(setUser);
  }, []);
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
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Serial No</TableCell>
                        <TableCell>Prediction Type</TableCell>
                        <TableCell>Predicted Sample</TableCell>
                        <TableCell>Result</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>HRCT</TableCell>
                        <TableCell>
                          <a href="#">See Anaylsis</a>
                        </TableCell>
                        <TableCell>Covid Infected</TableCell>
                      </TableRow>
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
