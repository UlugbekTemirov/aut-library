import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// components
import RowRenters from "./RowRenters";
import SpringModal from "./SpringModal";

// images
import sort from "../../../images/sort.png";

const TableRenters = (props) => {
  const { leasers, setUpdate } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [leaser, setLeaser] = useState({});
  const changeLeaserHandler = (leaser) => {
    setLeaser(leaser);
    handleOpen();
  };

  const [sortState, setSortState] = useState(true);
  const [sorted, setSorted] = useState([]);
  const sortHandler = () => {
    setSortState((prev) => !prev);
    const sortedOne = leasers.filter((leaser) => leaser.shouldBeReturned);
    const sortedTwo = leasers.filter((leaser) => !leaser.shouldBeReturned);
    sortState ? setSorted([...sortedOne, ...sortedTwo]) : setSorted([]);
  };

  return (
    <TableContainer sx={{ my: 2, borderRadius: "14px" }} component={Paper}>
      <SpringModal
        setUpdate={setUpdate}
        leaser={leaser}
        open={open}
        setOpen={setOpen}
      />
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
            <TableCell
              onClick={sortHandler}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                height: "100%",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "lightgray",
                },
                "&:active": {
                  backgroundColor: "silver",
                },
              }}
              align="left"
            >
              Holati <img className="w-3 h-3" src={sort} alt="sort" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sorted.length === 0
            ? leasers.map((leaser, index) => (
                <RowRenters
                  changeLeaserHandler={changeLeaserHandler}
                  key={leaser._id}
                  leaser={leaser}
                  index={index}
                />
              ))
            : sorted.map((leaser, index) => (
                <RowRenters
                  changeLeaserHandler={changeLeaserHandler}
                  key={leaser._id}
                  leaser={leaser}
                  index={index}
                />
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableRenters;
