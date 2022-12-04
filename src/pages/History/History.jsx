import React, { useState } from "react";

// components
import HistoryTable from "./components/HistoryTable";

// api
import GetHistoryApi from "../../api/GetHistoryApi";
import Loader from "../../components/Loader/Loader";

const History = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  GetHistoryApi(setLoading, setResponse);

  if (loading) return <Loader />;
  if (response.status !== "success") return <h1>{response.message}</h1>;
  if (response.length === 0) return <h1>No data</h1>;

  return <HistoryTable history={response?.data?.doc} />;
};

export default History;
