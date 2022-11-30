import React from "react";

// mui
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import NotExist from "./NotExist";

const RowBooks = (props) => {
  const { book } = props;

  return (
    <TableRow
      key={book.name}
      sx={{
        position: "relative",
        cursor: "pointer",
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": {
          backgroundColor: "#ccc",
        },
      }}
    >
      <TableCell component="th" scope="row">
        {book.name}
      </TableCell>
      <TableCell align="center">{book.author}</TableCell>
      <TableCell align="center">{book.year} yil</TableCell>
      <TableCell align="center">{book.amount} ta</TableCell>
      {book.amount === 0 && <NotExist />}
    </TableRow>
  );
};

export default RowBooks;
