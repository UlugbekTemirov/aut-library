import React, { useState } from "react";

// mui
import { Skeleton } from "@mui/material";

// api
import BookPreviewApi from "../../../api/BookPreviewApi";

const BookPreview = ({ book, status, setStatus }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  BookPreviewApi(setLoading, setResponse, book?.id, setStatus);

  return (
    <div className="w-full">
      {loading ? (
        <Skeleton
          sx={{ borderRadius: "8px" }}
          variant="rounded"
          width="100%"
          height={600}
        />
      ) : !status ? (
        <div className="bg-gray-600 w-full h-full text-white text-2xl text-center uppercase pt-[48%]">
          pdf is not available!
        </div>
      ) : (
        <iframe
          className="rounded-2xl"
          src={response}
          width="100%"
          height="600px"
        />
      )}
    </div>
  );
};

export default BookPreview;
