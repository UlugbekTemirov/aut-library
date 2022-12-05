import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// components
import HistoryRow from "./HistoryRow";

const HistoryTable = (props) => {
  const { history } = props;

  return (
    <TableContainer sx={{ my: 2, borderRadius: "14px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
            <TableCell align="left" sx={{ width: 30, fontWeight: "bold" }}>
              Raqam
            </TableCell>
            <TableCell align="left">Talaba</TableCell>
            <TableCell align="left">Kitob</TableCell>
            <TableCell align="left">Seriya raqami</TableCell>
            <TableCell align="left">Guruh</TableCell>
            <TableCell align="left">Fakultet</TableCell>
            <TableCell align="left">Telefon raqam</TableCell>
            <TableCell align="left">Olingan</TableCell>
            <TableCell align="left">Berilishi kerak</TableCell>
            <TableCell align="left">Berilgan</TableCell>
            <TableCell align="left">Holati</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((history, index) => (
            <HistoryRow key={history._id} history={history} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
