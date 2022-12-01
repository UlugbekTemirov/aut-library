import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RowRenters from "./RowRenters";

// leasers
const leasers = [
  {
    studentName: "Jamshid Toshov",
    orderedBook: "6387b6c2a8014138812f7685",
    classOfStudent: 201,
    major: "Civil",
    studentPhoneNumber: "+998945414635",
  },
  {
    studentName: "Temirov Ulugbek",
    orderedBook: "6387b6c2a8014138812f7685",
    classOfStudent: 202,
    major: "ECE",
    studentPhoneNumber: "+998945414635",
  },
  {
    studentName: "Narimon Jo'rayev",
    orderedBook: "6387b6c2a8014138812f7685",
    classOfStudent: 202,
    major: "Architecture",
    studentPhoneNumber: "+998945414635",
  },
  {
    studentName: "Abror Axmedov",
    orderedBook: "6387b6c2a8014138812f7685",
    classOfStudent: 203,
    major: "ECE",
    studentPhoneNumber: "+998945414635",
  },
];

const TableRenters = (props) => {
  const { leasers } = props;
  console.log(leasers);
  return (
    <TableContainer sx={{ my: 4 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ width: 30, fontWeight: "bold" }}>
              Order
            </TableCell>
            <TableCell align="left">Student Name</TableCell>
            <TableCell align="left">Ordered Book</TableCell>
            <TableCell align="left">Faculty</TableCell>
            <TableCell align="left">Major</TableCell>
            <TableCell align="left">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leasers.map((leaser, index) => (
            <RowRenters key={leaser._id} leaser={leaser} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableRenters;
