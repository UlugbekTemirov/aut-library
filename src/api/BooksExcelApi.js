import React, { useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { URL as newURL } from "../global";

// cookie
import Cookies from "universal-cookie";

const BooksExcelApi = async () => {
  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });
  const NEWURL = `${newURL}/api/v1/books/download/`;

  const headers = { "Content-Type": "blob", authorization: `Bearer ${jwt}` };
  const config = {
    method: "GET",
    url: NEWURL,
    responseType: "arraybuffer",
    headers,
  };

  try {
    const response = await axios(config);

    const outputFilename = `kitoblar-${Date.now()}.xls`;

    const url = URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", outputFilename);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    throw Error(error);
  }
};

export default BooksExcelApi;
