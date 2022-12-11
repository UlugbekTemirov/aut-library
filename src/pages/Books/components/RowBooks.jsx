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
import upload from "../../../images/cloud-computing.png";

// globals
import { URL } from "../../../global";

// cookies
import Cookies from "universal-cookie";
import UploadBookApi from "../../../api/UploadBookApi";

const cookie = new Cookies();

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
  const jwt = cookie.get("jwt", { path: "/" });
  const { book, index, qrcode } = props;

  const [open, setOpen] = React.useState(false);
  const [openUpload, setOpenUpload] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpenUpload(false);
    setOpen(false);
  };

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

  const openUploadModal = () => {
    setOpenUpload(true);
  };

  const [uresponse, setuResponse] = useState({});
  const [uloading, setuLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [id, setId] = useState("");

  const uploadFile = (e, id) => {
    setFile(e.target.files[0]);
    setId(id);
  };

  const uploadFileHandler = () => {
    const data = new FormData();
    data.append("file", file);
    UploadBookApi(setuResponse, setuLoading, id, data);
  };

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
        {Boolean(book.file) ? (
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
        {Boolean(book.file) ? (
          <a
            href={`${URL}/api/v1/books/download/${book.id}`}
            download
            target="_blank"
          >
            <img
              className="w-10 hover:bg-gray-300 rounded-full p-1 mx-auto transition-all"
              src={downloadIcon}
              alt="download"
            />
          </a>
        ) : (
          <img
            className="w-10 cursor-not-allowed rounded-full p-1 mx-auto transition-all opacity-40"
            src={downloadIcon}
            alt="download"
          />
        )}
      </TableCell>
      {Boolean(jwt) && (
        <TableCell sx={{ width: "40px" }}>
          <img
            onClick={openUploadModal}
            className="w-10 hover:bg-gray-300 rounded-full p-1 mx-auto transition-all"
            src={upload}
            alt="upload"
          />
        </TableCell>
      )}
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
      <Modal
        open={openUpload}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <input type="file" onChange={(e) => uploadFile(e, book.id)} />
            <button onClick={uploadFileHandler}>submit</button>
          </div>
        </Box>
      </Modal>
    </TableRow>
  );
};

export default RowBooks;
