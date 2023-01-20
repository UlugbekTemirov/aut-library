// mui
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};

const Dropbox = ({
  open,
  handleClose,
  submitHandler,
  id,
  fileHandler,
  fileWithDropHandler,
  file,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Kitobni tanlang
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <label
            htmlFor="dropbox"
            onDrop={(e) => fileWithDropHandler(e)}
            onDragEnter={(e) => fileWithDropHandler(e)}
            onDragLeave={(e) => fileWithDropHandler(e)}
            onDragOver={(e) => fileWithDropHandler(e)}
            className="border-2 border-dashed border-blue-800 flex items-center justify-center w-full h-40 py-1 px-2 text-center cursor-pointer"
          >
            {Boolean(file) ? file?.name : "drop file here"}
          </label>
          <input
            id="dropbox"
            className="hidden"
            type="file"
            onChange={fileHandler}
            accept="application/pdf"
          />
          <button
            className="px-4 rounded-xl mt-2 bg-green-800 hover:bg-green-700 transition-all text-white text-lg"
            type="button"
            onClick={() => submitHandler(id)}
          >
            submit
          </button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default Dropbox;
