import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getCovidInfoByCountry } from "../api/data.api";

function RootTable({ sx }) {
  const [covidInfo, setCovidInfo] = React.useState([]);
  React.useEffect(() => getCovidInfoByCountry(setCovidInfo), []);
  return (
    <>
      <Paper sx={sx}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell align="right">Confirmed</TableCell>
                <TableCell align="right">Recovered</TableCell>
                <TableCell align="right">Deaths</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {covidInfo?.map((row, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {row.country}
                  </TableCell>
                  <TableCell align="right">{row.cases}</TableCell>
                  <TableCell align="right">{row.recovered}</TableCell>
                  <TableCell align="right">{row.deaths}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default RootTable;
