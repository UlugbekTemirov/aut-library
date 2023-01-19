import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// cookies
import Cookies from "universal-cookie";

// components
import RowBooks from "./RowBooks";
import { Loader } from "../../../components";

// api
import GetAllBooksApi from "../../../api/GetAllBooksApi";

const TableBooks = (props) => {
  const { search, books, loading, qrcode, searchRes } = props;

  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  // const [allBooks, setAllBooks] = useState({});
  // const [booksloading, setBooksLoading] = useState(false);
  // GetAllBooksApi(setBooksLoading, setAllBooks, null, null, true, true);

  // const allbooks = allBooks?.data?.doc;

  return (
    <TableContainer sx={{ borderRadius: "14px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "rgb(220,220,220, 0.3)" }}>
          <TableRow>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="left"
            >
              Tartib
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="left"
            >
              Kitoblar
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              Muallif
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              Janri
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              Yil
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              Miqdor
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold", px: 0 }}
              align="center"
            >
              Pdf
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold", pr: 0 }}
              align="center"
            >
              QR
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold", px: 0 }}
              align="center"
            >
              Batafsil
            </TableCell>

            {/* <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              CD
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              From
            </TableCell>
            
            <TableCell
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              Yuklash
            </TableCell>
            {Boolean(jwt) && (
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                align="center"
              >
                Joylash
              </TableCell>
            )} */}
          </TableRow>
        </TableHead>
        <TableBody>
          {search === ""
            ? books.map((book, index) => {
                return (
                  <RowBooks
                    qrcode={qrcode}
                    key={book._id}
                    index={index}
                    book={book}
                  />
                );
              })
            : searchRes?.data?.map((book, index) => {
                if (
                  book.name.toLowerCase().includes(search.toLowerCase()) ||
                  book.author.toLowerCase().includes(search.toLowerCase())
                ) {
                  return (
                    <RowBooks
                      qrcode={qrcode}
                      key={book._id}
                      index={index}
                      book={book}
                    />
                  );
                }
              })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBooks;
