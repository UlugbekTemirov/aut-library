import React, { useState, useEffect } from "react";

// mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// components
import NewBookForm from "./NewBookForm";
import QrCode from "./QrCode";

// icons
import addBook from "../../../images/book.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: "none",
  borderRadius: 3,
};

const AddNewBook = (props) => {
  const { setUpdate } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});

  // useEffect(() => {
  //   if (response.status === "success") setUpdate((prev) => !prev);
  // }, [response]);

  const status = response?.status === "success";

  return (
    <div className="my-3 md:m-0">
      <Button
        sx={{
          borderRadius: "12px",
          width: "100%",
          bgcolor: "rgb(0,0,128)",
          "&:hover": {
            bgcolor: "rgb(0,0,128, 0.8)",
          },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Kitob qo'shish <img className="w-5 ml-3" src={addBook} alt="bookadd" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {status ? (
            <QrCode response={response} />
          ) : (
            <div>
              <h2 className="text-black text-3xl text-center mb-3">
                Yangi Kitob Qo'shish
              </h2>
              <NewBookForm
                setLoading={setLoading}
                setResponse={setResponse}
                response={response}
              />
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default AddNewBook;
