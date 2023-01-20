import React, { useState } from "react";

// mui
import { Skeleton } from "@mui/material";

// global
import { URL } from "../../../global";

// api
import BookPreviewApi from "../../../api/BookPreviewApi";

const BookPreview = ({ book }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  BookPreviewApi(setLoading, setResponse, book?.id);

  return (
    <div className="w-full">
      {loading ? (
        <Skeleton
          sx={{ borderRadius: "8px" }}
          variant="rounded"
          width="100%"
          height={600}
        />
      ) : (
        <iframe
          className="rounded-2xl"
          src={
            response ??
            "https://res.cloudinary.com/dy1qz7xrs/image/upload/v1670436178/Xudoyberdi_To_xtaboyev_-_Mungli_ko_zlar_p9lmr6.pdf"
          }
          width="100%"
          height="600px"
        />
      )}
    </div>
  );
};

export default BookPreview;
