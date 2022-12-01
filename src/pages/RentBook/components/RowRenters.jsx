import React from "react";

// mui
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const RowRenters = (props) => {
  const { leaser, index } = props;
  // const changeLeaserHandler = (leaser) => {
  //   console.log(leaser._id);
  // };

  return (
    <TableRow
      sx={{
        position: "relative",
        cursor: "pointer",
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": {
          backgroundColor: "#ccc",
        },
      }}
    >
      <TableCell align="center" component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell align="left">{leaser.studentName}</TableCell>
      <TableCell align="left">
        <div>
          <div className="font-bold">{leaser.orderedBook?.name}</div>
          <div>
            <h6 className="text-xs">
              Muallif:
              <span className="text-blue-800 mr-4">
                {leaser.orderedBook?.author}
              </span>
            </h6>
          </div>
        </div>
      </TableCell>
      <TableCell align="left">{leaser.classOfStudent}</TableCell>
      <TableCell align="left">{leaser.major}</TableCell>
      <TableCell align="left">{leaser.studentPhoneNumber}</TableCell>
    </TableRow>
  );
};

export default RowRenters;
