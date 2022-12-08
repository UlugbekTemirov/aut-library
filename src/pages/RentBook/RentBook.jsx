import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { update } from "react-spring";

// api
import GetLeasersApi from "../../api/GetLeasersApi";

// components
import Loader from "../../components/Loader/Loader";
import AddLease from "./components/AddLease";
import LeasePagination from "./components/Pagination";
import TableRenters from "./components/TableRenters";

// icon
import excelIcon from "../../images/excel.png";

// api
import DownloadExcelApi from "../../api/DownloadExcelApi";

const RentBook = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [update, setUpdate] = useState(false);

  GetLeasersApi(setLoading, setResponse, page, limit, update);
  console.log(response);

  // download leases as Excel
  const downloadExcelHandler = () => {
    DownloadExcelApi("leases");
  };

  if (loading) return <Loader />;
  if (response.status !== "success") return <h1>{response.message}</h1>;
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <AddLease setUpdate={setUpdate} />
        <Button
          sx={{
            borderRadius: "12px",
            ml: 3,
            backgroundColor: "seagreen",
            "&:hover": {
              backgroundColor: "green",
            },
          }}
          onClick={downloadExcelHandler}
          variant="contained"
        >
          Excelda Yuklash
          <img
            className="w-5 ml-2 shadow-xl shadow-green-500"
            src={excelIcon}
            alt="excel"
          />
        </Button>
      </div>
      <TableRenters setUpdate={setUpdate} leasers={response.data.doc} />
      <LeasePagination
        page={page}
        setPage={setPage}
        pageLimit={response?.maxPage}
      />
    </React.Fragment>
  );
};

export default RentBook;
