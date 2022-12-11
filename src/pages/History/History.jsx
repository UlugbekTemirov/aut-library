import React, { useState } from "react";

// components
import HistoryTable from "./components/HistoryTable";
import Loader from "../../components/Loader/Loader";
import HistoryPagination from "./components/Pagination";

// api
import GetHistoryApi from "../../api/GetHistoryApi";
import DownloadExcelApi from "../../api/DownloadExcelApi";

// cookies
import Cookies from "universal-cookie";
const cookie = new Cookies();

// mui
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// excel icon
import excelIcon from "../../images/excel.png";
import deleteicon from "../../images/delete.png";
import DeleteHistoryApi from "../../api/DeleteHistoryApi";

const History = () => {
  const jwt = cookie.get("jwt", { path: "/" });

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const downloadExcelHandler = () => {
    DownloadExcelApi("leases/history");
  };

  const [delLoading, setDelLoading] = useState(false);
  const [delResponse, setDelResponse] = useState({});
  const deleteYearlyHistory = () => {
    DeleteHistoryApi(setDelLoading, setDelResponse);
  };

  const confirmHandler = () => {
    downloadExcelHandler();
    deleteYearlyHistory();
    handleClose();
  };
  console.log(delResponse);

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

  GetHistoryApi(setLoading, setResponse, page, limit);

  if (loading) return <Loader />;
  if (response.status !== "success") return <h1>{response.message}</h1>;
  if (response.length === 0) return <h1>No data</h1>;

  return (
    <React.Fragment>
      {Boolean(jwt) && (
        <div className="w-full flex justify-between">
          <Button
            sx={{
              borderRadius: "12px",
              backgroundColor: "rgb(139,0,0)",
              "&:hover": {
                backgroundColor: "rgb(139,0,0, .8)",
              },
            }}
            onClick={() => setOpen(true)}
            variant="contained"
          >
            Yillik hisobotni o'chirish
            <img className="w-5 ml-2" src={deleteicon} alt="excel" />
          </Button>
          <Button
            sx={{
              borderRadius: "12px",
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "seagreen",
              },
            }}
            onClick={downloadExcelHandler}
            variant="contained"
          >
            Excelda Yuklash
            <img className="w-5 ml-2" src={excelIcon} alt="excel" />
          </Button>
        </div>
      )}
      <HistoryTable history={response?.data?.doc} />
      <HistoryPagination
        pageLimit={response?.maxPage}
        page={page}
        setPage={setPage}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <h2>Rostdan ham yillik hisobotni o'chirib yubormoqchimisiz?</h2>
            <button
              className="bg-red-800 text-white text-lg py-1 px-4 rounded-xl mt-2"
              onClick={confirmHandler}
            >
              o'chirish
            </button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default History;
