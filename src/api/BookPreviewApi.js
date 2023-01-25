import React, { useEffect } from "react";
import { URL as xURL } from "../global";

const BookPreviewApi = (setLoading, setResponse, id, setStatus) => {
  useEffect(() => {
    setLoading(true);
    fetch(`${xURL}/api/v1/books/preview/${id}`)
      .then((res) => {
        setStatus(res.ok);
        return res.arrayBuffer();
      })
      .then((res) => {
        console.log(res);
        const url = URL.createObjectURL(
          new Blob([res], {
            type: "application/pdf",
          })
        );
        console.log();
        setResponse(url);
        setLoading(false);
      });
  }, [id]);
};

export default BookPreviewApi;
