import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = () => {
  const PaginationHandler = (e, page) => {
    console.log(page);
  };

  return (
    <Stack sx={{ mt: 2 }} spacing={2}>
      <div className="w-full flex justify-center">
        <Pagination
          onChange={(e, page) => PaginationHandler(e, page)}
          count={10}
          color="secondary"
          sx={{
            background: "linear-gradient(to right, #005aa7, #fffde4)",
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

export default BasicPagination;
