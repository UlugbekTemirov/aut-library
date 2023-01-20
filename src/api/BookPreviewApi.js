import React, { useEffect } from "react";
import { URL as xURL } from "../global";

const BookPreviewApi = (setLoading, setResponse, id) => {
  useEffect(() => {
    setLoading(true);
    fetch(`${xURL}/api/v1/books/preview/${id}`)
      .then((res) => res.arrayBuffer())
      .then((res) => {
        const url = URL.createObjectURL(
          new Blob([res], {
            type: "application/pdf",
          })
        );
        setResponse(url);
        setLoading(false);
      });
  }, [id]);
};

export default BookPreviewApi;
