import React from "react";
import { JWT, URL } from "../global";

const ReturnBookApi = (setLoading, setResponse, bookId) => {
  fetch(`${URL}/api/v1/leases/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${JWT}`,
    },
  })
    .then((promise) => promise.json())
    .then((response) => {
      setLoading(false);
      setResponse(response);
    });
  return;
};

export default ReturnBookApi;
