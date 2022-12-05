import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = (props) => {
  const { setPage, page, pageLimit } = props;

  const PaginationHandler = (e, page) => {
    setPage(page);
  };

  return (
    <Stack sx={{ mt: 2 }} spacing={2}>
      <div className="w-full flex justify-center">
        <Pagination
          onChange={(e, page) => PaginationHandler(e, page)}
          count={pageLimit}
          color="success"
          page={page}
          sx={{
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px 10px",
            borderRadius: "15px",
            color: "#fff",
          }}
        />
      </div>
    </Stack>
  );
};

export default BasicPagination;
