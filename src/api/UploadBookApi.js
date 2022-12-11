import React, { useEffect } from "react";

// global
import { URL, JWT } from "../global";

const UploadBookApi = (setResponse, setLoading, id, file) => {
  setLoading(true);
  fetch(`${URL}/api/v1/books/upload/${id}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${JWT}`,
    },
    body: file,
  })
    .then((promise) => {
      return promise.json();
    })
    .then((response) => {
      setLoading(false);
      setResponse(response);
    });
};

export default UploadBookApi;
