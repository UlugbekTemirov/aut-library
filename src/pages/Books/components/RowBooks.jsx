import React, { useState } from "react";

// mui
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// images
import qrCodeIcon from "../../../images/qr-code.png";
import accept from "../../../images/accept.png";
import minus from "../../../images/minus.png";
import downloadIcon from "../../../images/download.png";

// globals
import { URL } from "../../../global";

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

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const getBookQrHandler = (id) => {
    handleOpen();
    setLoading(true);
    fetch(`${URL}/api/v1/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((promise) => promise.json())
      .then((response) => {
        setLoading(false);
        setResponse(response);
      });
  };

  // book amount
  const a = book.amount === 0;

  // eversion
  const eversion = false;

  return (
    <TableRow
      key={book.name}
      sx={{
        position: "relative",
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": {
          backgroundColor: "rgb(220,220,220, 0.5)",
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
      <TableCell sx={{ fontSize: 20 }} align="left">
        Badiiy
      </TableCell>
      <TableCell sx={{ fontSize: 20 }} align="center">
        {book.year} yil
      </TableCell>
      <TableCell sx={{ fontSize: 20 }} align="center">
        {book.amount} ta
      </TableCell>
      <TableCell
        sx={{
          position: "relative",
        }}
      >
        {eversion ? (
          <img
            className="w-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src={accept}
            alt="bor"
          />
        ) : (
          <img
            className="w-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src={minus}
            alt="yo'q"
          />
        )}
      </TableCell>
      <TableCell sx={{ width: "70px" }}>
        <div className="flex justify-center">
          <img
            onClick={() => getBookQrHandler(book.id)}
            className="w-8 h-8 hover:bg-gray-300 p-1 rounded cursor-pointer"
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
            className="w-10 hover:bg-gray-300 rounded-full p-1 mx-auto transition-all"
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
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              <div>
                <h2 className="text-lg font-bold">{book?.name}</h2>
                <img
                  className="w-full"
                  src={response?.data?.qrCode}
                  alt={book.name}
                />
                <div className="flex justify-center">
                  <a
                    className="bg-blue-700 py-1 px-4 rounded-xl text-white text-xl hover:bg-blue-800 transition-all"
                    href={response?.data?.qrCode}
                    download={book?.name}
                  >
                    yuklash
                  </a>
                </div>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </TableRow>
  );
};

export default RowBooks;
