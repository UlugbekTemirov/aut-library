import React from "react";

// mui
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const RowRenters = (props) => {
  const { leaser, index, changeLeaserHandler } = props;
  console.log(leaser);
  const data = new Date(leaser.orderedTime);
  const day = data.getDate();
  const month = data.getMonth();
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  const deadline = new Date(leaser.deadline);
  const dday = deadline.getDate();
  const dmonth = deadline.getMonth();

  return (
    <React.Fragment>
      <TableRow
        onClick={() => changeLeaserHandler(leaser)}
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
        <TableCell align="left">
          <h2 className="text-lg">{leaser.studentName}</h2>
        </TableCell>
        <TableCell align="left">
          <div>
            <div className="font-bold text-md">{leaser.orderedBook?.name}</div>
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
        <TableCell align="left">{leaser.orderedBook?.codes[0]}</TableCell>
        <TableCell align="left">{leaser.classOfStudent}</TableCell>
        <TableCell align="left">{leaser.major}</TableCell>
        <TableCell align="left">{leaser.studentPhoneNumber}</TableCell>
        <TableCell align="left">
          {day}-{months[month]}
        </TableCell>
        <TableCell align="left">
          {dday}-{months[dmonth]}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default RowRenters;
