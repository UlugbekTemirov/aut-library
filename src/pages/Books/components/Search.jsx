import React, { useState } from "react";

const Search = (props) => {
  const { search, searchHandler } = props;

  return (
    <form className="search-form my-4">
      <label className="text-white text-xl" htmlFor="searchBook">
        Search
      </label>
      <input
        className="outline-none px-2 py-2 rounded-lg ml-4"
        type="text"
        placeholder="Harry Potter"
        id="searchBook"
        onChange={searchHandler}
        value={search}
      />
    </form>
  );
};

export default Search;
