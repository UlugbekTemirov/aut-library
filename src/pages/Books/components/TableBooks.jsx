import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// components
import RowBooks from "./RowBooks";
import Loader from "../../../components/Loader/Loader";

const TableBooks = (props) => {
  const { search, books, loading } = props;

  return (
    <TableContainer sx={{ borderRadius: "14px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ fontWeight: "bold" }}>
          <TableRow>
            <TableCell align="left">Order</TableCell>
            <TableCell align="left">Books</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left">Year</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => {
            if (search === "")
              return <RowBooks key={book._id} index={index} book={book} />;
            if (search !== "") {
              if (
                book.name.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase())
              ) {
                return <RowBooks key={book.name} index={index} book={book} />;
              }
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBooks;
