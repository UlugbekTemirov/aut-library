import React, { useState } from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// web.cjs is required for IE11 support
import { useSpring, animated } from "react-spring";

// api
import ReturnBookApi from "../../../api/ReturnBookApi";
import LoaderMini from "./LoaderMini";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  boxShadow: 24,
  backgroundColor: "#fff",
  borderRadius: 4,
  p: 4,
};

const SpringModal = (props) => {
  const { open, setOpen, leaser, setUpdate } = props;

  const [loading, setLoading] = useState();
  const [response, setResponse] = useState([]);

  const returnBookHandler = () => {
    ReturnBookApi(setLoading, setResponse, leaser.id);
  };

  if (response?.status === "success") setUpdate((prev) => !prev);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {loading && typeof loading === "boolean" && (
              <div className="w-full h-full absolute bg-black opacity-60 -m-8 rounded-2xl cursor-progress z-10 flex items-center justify-center">
                <LoaderMini />
              </div>
            )}

            <Typography
              sx={{ textAlign: "center", fontSize: "25px" }}
              id="spring-modal-title"
              variant="h6"
              component="h2"
            >
              {leaser.studentName}
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              id="spring-modal-title"
              variant="h6"
              component="h2"
            >
              Book: {leaser.orderedBook?.name}
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              id="spring-modal-title"
              variant="h6"
              component="h2"
            >
              Code: {leaser.orderedBookSeria}
            </Typography>
            <Typography
              id="spring-modal-description"
              sx={{ mt: 2, display: "flex", justifyContent: "center" }}
            >
              <Button
                onClick={returnBookHandler}
                sx={{
                  py: 1,
                  px: 2,
                  backgroundColor: "#006400",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
                variant="contained"
              >
                Kitobni qaytarish
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SpringModal;
