import React, { useState } from "react";

// mui
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

// images
import qrCodeIcon from "../../../images/qr-code.png";
import downloadIcon from "../../../images/download.png";
import { URL } from "../../../global";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: "none",
  borderRadius: 3,
};

const RowBooks = (props) => {
  const { book, index, qrcode } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [response, setResponse] = useState({});
  const getBookQrHandler = (id) => {
    handleOpen();
    fetch(`${URL}/api/v1/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((promise) => promise.json())
      .then((response) => setResponse(response));
  };

  // book amount
  const a = book.amount === 0;

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
      <TableCell
        align="center"
        component="th"
        scope="row"
        sx={{ width: 30, fontSize: 20 }}
      >
        {index + 1}
      </TableCell>
      <TableCell sx={{ fontSize: 20 }} align="left">
        {book.name}
      </TableCell>
      <TableCell sx={{ fontSize: 20 }} align="left">
        {book.author}
      </TableCell>
      <TableCell sx={{ fontSize: 20 }} align="center">
        {book.year} yil
      </TableCell>
      <TableCell sx={{ fontSize: 20 }} align="center">
        {book.amount} ta
      </TableCell>
      <TableCell sx={{ width: "70px" }}>
        <div className="flex justify-center">
          <img
            onClick={() => getBookQrHandler(book.id)}
            className="w-8 h-8 hover:bg-gray-400 p-1 rounded"
            src={qrCodeIcon}
            alt="qrcode"
          />
        </div>
      </TableCell>
      <TableCell sx={{ width: "40px" }}>
        <a
          href="https://res.cloudinary.com/dy1qz7xrs/image/upload/v1670436178/Xudoyberdi_To_xtaboyev_-_Mungli_ko_zlar_p9lmr6.pdf"
          download={"mungli ko'zlar"}
        >
          <img
            className="w-10 hover:bg-gray-400 rounded-full p-1 mx-auto transition-all"
            src={downloadIcon}
            alt="download"
          />
        </a>
      </TableCell>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <img src={response?.data?.qrCode} alt={book.name} />
            <a href={response?.data?.qrCode} download={book?.name}>
              yuklash
            </a>
          </div>
        </Box>
      </Modal>
    </TableRow>
  );
};

export default RowBooks;
