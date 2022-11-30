import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// dummy data
import { books } from "../../../global";

// components
import NotExist from "./NotExist";
import RowBooks from "./RowBooks";

const TableBooks = (props) => {
  const { search } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Books</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => {
            if (search === "") return <RowBooks key={book.name} book={book} />;
            if (search !== "") {
              if (
                book.name.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase())
              ) {
                return <RowBooks key={book.name} book={book} />;
              }
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBooks;
