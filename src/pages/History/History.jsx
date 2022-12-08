import React, { useState } from "react";

// components
import HistoryTable from "./components/HistoryTable";

// api
import GetHistoryApi from "../../api/GetHistoryApi";
import Loader from "../../components/Loader/Loader";
import HistoryPagination from "./components/Pagination";

const History = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  GetHistoryApi(setLoading, setResponse, page, limit);

  if (loading) return <Loader />;
  if (response.status !== "success") return <h1>{response.message}</h1>;
  if (response.length === 0) return <h1>No data</h1>;

  console.log(response);

  return (
    <React.Fragment>
      <HistoryTable history={response?.data?.doc} />
      <HistoryPagination
        pageLimit={response?.maxPage}
        page={page}
        setPage={setPage}
      />
    </React.Fragment>
  );
};

export default History;
