import React, { useState } from "react";

const Search = (props) => {
  const { search, searchHandler } = props;

  return (
    <form className="search-form">
      {/* <label
        className="text-white text-xl md:visible hidden"
        htmlFor="searchBook"
      >
        Search
      </label> */}
      <input
        className="outline-none px-2 py-2 rounded-lg md:w-auto w-full"
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
