import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// component;
import LeaseForm from "./LeaseForm";
import GetAllBooksApi from "../../../api/GetAllBooksApi";

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
  borderRadius: 4,
};

const AddLease = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  GetAllBooksApi(setLoading, setResponse, null, null);

  return (
    <div>
      <Button
        sx={{ mt: 2, borderRadius: "14px" }}
        variant="contained"
        onClick={handleOpen}
      >
        Ijaraga Berish
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="text-gray-700 text-3xl text-center mb-3">
            Ijaraga Berish
          </h2>
          <LeaseForm loading={loading} books={response?.data?.doc} />
        </Box>
      </Modal>
    </div>
  );
};

export default AddLease;
