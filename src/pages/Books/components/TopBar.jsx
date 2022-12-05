import React from "react";

// components
import Search from "./Search";
import Category from "./Category.jsx";
import AddNewBook from "./AddNewBook.jsx";

// cookie
import Cookies from "universal-cookie";

const TopBar = (props) => {
  const cookie = new Cookies();
  const jwt = cookie.get("jwt");

  const { search, searchHandler, categoryHandler } = props;

  return (
    <div className="md:flex md:items-center md:justify-between ">
      <div className="md:flex md:items-center">
        <Search search={search} searchHandler={searchHandler} />
        <Category categoryHandler={categoryHandler} />
      </div>
      {Boolean(jwt) && <AddNewBook />}
    </div>
  );
};

export default TopBar;
