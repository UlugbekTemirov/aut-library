import React, { useState, useEffect } from "react";

// components
import TableBooks from "./components/TableBooks";
import Pagination from "./components/Pagination";
import TopBar from "./components/TopBar";
import Loader from "../../components/Loader/Loader";

// api
import GetAllBooksApi from "../../api/GetAllBooksApi";

const Books = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const [category, setCategory] = useState("");
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [update, setUpdate] = useState(false);

  // api
  GetAllBooksApi(setLoading, setResponse, page, limit, update, false);

  if (loading) return <Loader />;
  if (response.status !== "success") return <h1>{response.message}</h1>;
  if (response === undefined) return <h1>No data</h1>;

  return (
    <div>
      <TopBar
        setUpdate={setUpdate}
        categoryHandler={categoryHandler}
        search={search}
        searchHandler={searchHandler}
      />
      <TableBooks
        loading={loading}
        books={response?.data?.doc}
        qrcode={response?.qrcode}
        search={search}
      />
      <Pagination
        pageLimit={response?.maxPage}
        page={page}
        setPage={setPage}
        setSearch={setSearch}
      />
    </div>
  );
};

export default Books;
