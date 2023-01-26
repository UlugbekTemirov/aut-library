import React, { useState } from "react";

// mui
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// icons

import accept from "../../../images/accept.png";
import minus from "../../../images/minus.png";

// cookies
import UploadBookApi from "../../../api/UploadBookApi";
import { useNavigate } from "react-router-dom";

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
  const { book, index } = props;

  const [openUpload, setOpenUpload] = useState(false);

  const handleClose = () => {
    setOpenUpload(false);
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

  const navigate = useNavigate();

  return (
    <TableRow
      onClick={() => navigate(book.slug)}
      key={book.name}
      sx={{
        cursor: "pointer",
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
      <TableCell sx={{ fontSize: 20 }} align="center">
        {book.author}
      </TableCell>
      <TableCell sx={{ fontSize: 20 }} align="center">
        {book.category}
      </TableCell>
      <TableCell sx={{ fontSize: 20 }} align="center">
        {book.year}-yil
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
