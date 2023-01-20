import React, { useState, useEffect } from "react";

// components
import TableBooks from "./components/TableBooks";
import Pagination from "./components/Pagination";
import TopBar from "./components/TopBar";
import Loader from "../../components/Loader/Loader";

// mui
import Skeleton from "@mui/material/Skeleton";

// api
import GetAllBooksApi from "../../api/GetAllBooksApi";
import BooksSearchApi from "../../api/BooksSearchApi";

const Books = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const [searchRes, setSearchRes] = useState({});
  const [searchLoading, setSearchLoading] = useState(false);

  const [category, setCategory] = useState("");
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  console.log(category);

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [update, setUpdate] = useState(false);

  // api
  BooksSearchApi(setSearchLoading, setSearchRes, search);
  GetAllBooksApi(setLoading, setResponse, page, limit, update, false, category);

  return (
    <div>
      <TopBar
        setUpdate={setUpdate}
        categoryHandler={categoryHandler}
        search={search}
        searchHandler={searchHandler}
      />
      {!loading ? (
        <TableBooks
          loading={loading}
          books={response?.data?.doc}
          qrcode={response?.qrcode}
          search={search}
          searchRes={searchRes}
        />
      ) : (
        <Skeleton
          sx={{ borderRadius: "12px", bgcolor: "#454545" }}
          variant="rounded"
          width="100%"
          height={780}
        />
      )}
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
