import React, { useEffect } from "react";
import { URL } from "../global";

const BooksSearchApi = (setLoading, setResponse, search) => {
  useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/v1/books/search`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        payload: search,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setResponse(res);
      });
  }, [search]);
};

export default BooksSearchApi;
