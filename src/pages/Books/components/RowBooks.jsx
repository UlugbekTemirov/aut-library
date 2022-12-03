import React from "react";

// mui
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import NotExist from "./NotExist";

const RowBooks = (props) => {
  const { book, index } = props;
  const a = book.amount === 0;
  return (
    <TableRow
      key={book.name}
      sx={{
        position: "relative",
        cursor: "pointer",
        "&:last-child td, &:last-child th": { border: 0 },
        backgroundColor: `${a && "rgb(139,0,0,0.5)"}`,
        cursor: `${a ? "not-allowed" : "pointer"}`,
        "&:hover": {
          backgroundColor: `${!a && "#ccc"}`,
        },
      }}
    >
      <TableCell align="center" component="th" scope="row" sx={{ width: 30 }}>
        {index + 1}
      </TableCell>
      <TableCell align="left">{book.name}</TableCell>
      <TableCell align="left">{book.author}</TableCell>
      <TableCell align="left">{book.year} yil</TableCell>
      <TableCell align="left">{book.amount} ta</TableCell>
    </TableRow>
  );
};

export default RowBooks;
