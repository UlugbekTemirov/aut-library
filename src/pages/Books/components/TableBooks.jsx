import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// components
import RowBooks from "./RowBooks";
import { Link } from "react-router-dom";

const TableBooks = (props) => {
  const { search, books, loading, qrcode, searchRes } = props;

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
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              Pdf
            </TableCell>
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
