import React, { useState } from "react";

// components
import TableBooks from "./components/TableBooks";
import Pagination from "./components/Pagination";
import TopBar from "./components/TopBar";

const Books = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const [category, setCategory] = useState("");
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="mt-20">
      <TopBar
        categoryHandler={categoryHandler}
        search={search}
        searchHandler={searchHandler}
      />
      <TableBooks search={search} />
      <Pagination />
    </div>
  );
};

export default Books;
