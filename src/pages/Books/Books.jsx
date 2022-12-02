import React, { useState } from "react";

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

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // api
  GetAllBooksApi(setLoading, setResponse, page, limit);

  if (loading) return <Loader />;
  if (response.status !== "success") return <h1>{response.message}</h1>;
  if (response === undefined) return <h1>No data</h1>;

  return (
    <div>
      <TopBar
        categoryHandler={categoryHandler}
        search={search}
        searchHandler={searchHandler}
      />
      <TableBooks
        loading={loading}
        books={response?.data.doc}
        search={search}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Books;
