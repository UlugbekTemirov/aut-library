import React, { useEffect } from "react";

// global
import { URL } from "../global";

import Cookies from "universal-cookie";

const UploadBookApi = (setResponse, setLoading, id, file) => {
  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });
  setLoading(true);
  console.log(file);
  fetch(`${URL}/api/v1/books/upload/${id}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${jwt}`,
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
