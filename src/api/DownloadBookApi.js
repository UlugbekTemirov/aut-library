import React from "react";
import { URL as xURL } from "../global";
import axios from "axios";

const DownloadBookApi = async (setLoading, setResponse, id) => {
  const NEWURL = `${xURL}/api/v1/books/download/${id}`;

  const headers = { "Content-Type": "blob" };
  const config = {
    method: "GET",
    url: NEWURL,
    responseType: "arraybuffer",
    headers,
  };

  try {
    const response = await axios(config);

    const url = URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", response.data);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    throw Error(error);
  }
};

export default DownloadBookApi;
