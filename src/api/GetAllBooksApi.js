import React, { useEffect } from "react";

// global
import { URL } from "../global";

const GetAllBooksApi = (setLoading, setResponse, page, limit) => {
  console.log(page);
  useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/v1/books?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((promise) => promise.json())
      .then((response) => {
        setLoading(false);
        setResponse(response);
      });
  }, [page, limit]);
};

export default GetAllBooksApi;
