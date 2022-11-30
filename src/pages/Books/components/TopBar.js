import React from "react";

// components
import Search from "./Search";
import Category from "./Category";

const TopBar = (props) => {
  const { search, searchHandler, categoryHandler } = props;
  return (
    <div className="flex items-center">
      <Search search={search} searchHandler={searchHandler} />
      <Category categoryHandler={categoryHandler} />
    </div>
  );
};

export default TopBar;
