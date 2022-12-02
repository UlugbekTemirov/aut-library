import React, { useEffect } from "react";

// global
import { URL } from "../global";

const GetAllBooksApi = (setLoading, setResponse, page, limit) => {
  useEffect(() => {
    setLoading(true);
    const CUSTOM_URL = `${URL}/api/v1/books?page=${page}&limit=${limit}`;
    const MAIN_URL = `${URL}/api/v1/books?fields=name,codes`;
    const SELECT_URL = page === null || limit === null ? MAIN_URL : CUSTOM_URL;
    fetch(SELECT_URL, {
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
