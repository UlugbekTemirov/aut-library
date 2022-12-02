import React, { useEffect } from "react";

// global
import { URL, JWT } from "../global";

const AddNewBookApi = (setLoading, setResponse, book) => {
  setLoading(true);
  fetch(`${URL}/api/v1/books`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${JWT}`,
    },
    body: JSON.stringify(book),
  })
    .then((promise) => promise.json())
    .then((response) => {
      setLoading(false);
      setResponse(response);
    });
};

export default AddNewBookApi;
