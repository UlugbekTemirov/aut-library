import React, { useState } from "react";

// api
import GetLeasersApi from "../../api/GetLeasersApi";

// components
import Loader from "../../components/Loader/Loader";
import AddLease from "./components/AddLease";
import LeasePagination from "./components/Pagination";
import TableRenters from "./components/TableRenters";

const RentBook = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  GetLeasersApi(setLoading, setResponse, page, limit);

  if (loading) return <Loader />;
  if (response.status !== "success") return <h1>{response.message}</h1>;
  return (
    <React.Fragment>
      <AddLease />
      <TableRenters leasers={response.data.doc} />
      <LeasePagination page={page} setPage={setPage} />
    </React.Fragment>
  );
};

export default RentBook;
