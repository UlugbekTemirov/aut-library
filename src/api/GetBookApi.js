import React, { useEffect } from "react";
import { URL } from "../global";

const GetBookApi = (setLoading, setResponse, slug) => {
  useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/v1/books?slug=${slug}`)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setLoading(false);
      });
  }, []);
};

export default GetBookApi;
