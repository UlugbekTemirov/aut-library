import React from "react";

// mui
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const HistoryRow = (props) => {
  const { history, index } = props;
  const data = new Date(history.orderedTime);
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

  const deadline = new Date(history.deadline);
  const dday = deadline.getDate();
  const dmonth = deadline.getMonth();

  const deletedTime = new Date(history.deletedAt);
  const xday = deletedTime.getDate();
  const xmonth = deletedTime.getMonth();

  return (
    <React.Fragment>
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
        <TableCell align="left">
          <h2 className="text-lg">{history.studentName}</h2>
        </TableCell>
        <TableCell align="left">
          <div>
            <div className="font-bold text-md">{history.orderedBook?.name}</div>
            <div>
              <h6 className="text-xs">
                Muallif:
                <span className="text-blue-800 mr-4">
                  {history.orderedBook?.author}
                </span>
              </h6>
            </div>
          </div>
        </TableCell>
        <TableCell align="left">{history.orderedBookSeria}</TableCell>
        <TableCell align="left">{history.classOfStudent}</TableCell>
        <TableCell align="left">{history.major}</TableCell>
        <TableCell align="left">{history.studentPhoneNumber}</TableCell>
        <TableCell align="left">
          {day}-{months[month]}
        </TableCell>
        <TableCell align="left">
          {dday}-{months[dmonth]}
        </TableCell>
        <TableCell align="left">
          {xday}-{months[xmonth]}
        </TableCell>
        <TableCell align="center">
          {!history.active && (
            <div className="bg-green-800 rounded-full text-white p-1">
              qaytarildi
            </div>
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default HistoryRow;
