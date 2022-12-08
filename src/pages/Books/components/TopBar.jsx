import React from "react";

// components
import Search from "./Search";
import Category from "./Category.jsx";
import AddNewBook from "./AddNewBook.jsx";

// cookie
import Cookies from "universal-cookie";
import AddWithQrCode from "../../RentBook/components/AddWithQrCode";
import { Button } from "@mui/material";
import BooksExcelApi from "../../../api/BooksExcelApi";

// images
import excelIcon from "../../../images/excel.png";

const TopBar = (props) => {
  const cookie = new Cookies();
  const jwt = cookie.get("jwt");

  const {
    search,
    searchHandler,
    categoryHandler,
    setUpdate = { setUpdate },
  } = props;

  const downloadExcelHandler = () => {
    BooksExcelApi();
  };

  return (
    <div className="md:flex md:items-center md:justify-between ">
      <div className="md:flex md:items-center">
        <Search search={search} searchHandler={searchHandler} />
        <Category categoryHandler={categoryHandler} />
      </div>
      <div className="md:flex md:items-center">
        {Boolean(jwt) && <AddNewBook setUpdate={setUpdate} />}
        {Boolean(jwt) && (
          <Button
            sx={{
              borderRadius: "12px",
              ml: 3,
              backgroundColor: "seagreen",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
            onClick={downloadExcelHandler}
            variant="contained"
          >
            Excelda Yuklash
            <img
              className="w-5 ml-2 shadow-xl shadow-green-500"
              src={excelIcon}
              alt="excel"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
