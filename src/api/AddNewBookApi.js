import React, { useEffect } from "react";

// global
import { URL } from "../global";

import Cookies from "universal-cookie"

const AddNewBookApi = (setLoading, setResponse, book) => {

  const cookie = new Cookies()
  const jwt = cookie.get("jwt", {path: "/"})

  setLoading(true);
  fetch(`${URL}/api/v1/books`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(book),
  })
    .then((promise) => {
      console.log(promise);
      return promise.json();
    })
    .then((response) => {
      setLoading(false);
      setResponse(response);
    });
};

export default AddNewBookApi;
