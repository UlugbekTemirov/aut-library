import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const LeasePagination = (props) => {
  const { setPage, page } = props;

  const PaginationHandler = (e, page) => {
    setPage(page);
  };

  return (
    <Stack sx={{ mt: 2 }} spacing={2}>
      <div className="w-full flex justify-center">
        <Pagination
          onChange={(e, page) => PaginationHandler(e, page)}
          count={15}
          color="secondary"
          page={page}
          sx={{
            background: "#1D3A54",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px 0",
            borderRadius: "15px",
            color: "#fff",
            width: "400px",
          }}
        />
      </div>
    </Stack>
  );
};

export default LeasePagination;
