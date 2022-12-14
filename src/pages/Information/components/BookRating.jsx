import React from "react";

// mui
import { Rating } from "@mui/material";

const BookRating = () => {
  return (
    <div className="flex items-center">
      <h2 className="text-2xl mr-3">Rating: </h2>
      <Rating
        sx={{ fontSize: "2rem" }}
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        readOnly
      />
      <h2 className="opacity-50 text-xl ml-3">430</h2>
    </div>
  );
};

export default BookRating;
