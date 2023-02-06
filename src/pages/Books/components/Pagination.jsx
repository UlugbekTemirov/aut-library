import React, { useMemo } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = (props) => {
  const { setPage, page, pageLimit, setSearch } = props;

  const PaginationHandler = (e, page) => {
    setPage(page);
    setSearch("");
  };

  return (
    <Stack sx={{ mt: 2 }} spacing={2}>
      <div className="w-full flex justify-center">
        <Pagination
          onChange={(e, page) => PaginationHandler(e, page)}
          count={10}
          color="primary"
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
