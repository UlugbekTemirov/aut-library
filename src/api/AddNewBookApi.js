import React, { useEffect } from "react";

// global
import { URL } from "../global";

import Cookies from "universal-cookie";

const AddNewBookApi = (setLoading, setResponse, book) => {
  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  setLoading(true);
  fetch(`${URL}/api/v1/books`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${jwt}`,
    },
    body: book,
  })
    .then((promise) => {
      return promise.json();
    })
    .then((response) => {
      setLoading(false);
      setResponse(response);
    });
};

export default AddNewBookApi;
