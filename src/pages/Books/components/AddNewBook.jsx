import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import NewBookForm from "./NewBookForm";

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

  const {setUpdate} = props

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="my-3 md:m-0">
      <Button
        sx={{ borderRadius: "12px", width: "100%" }}
        variant="contained"
        onClick={handleOpen}
      >
        Add Book
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="text-black text-3xl text-center mb-3">Add new Book</h2>
          <NewBookForm setUpdate={setUpdate} />
        </Box>
      </Modal>
    </div>
  );
};

export default AddNewBook;
