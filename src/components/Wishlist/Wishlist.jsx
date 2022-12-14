import React from "react";

const Wishlist = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute border-2 bg-gray-400 md:w-96 w-80 h-36 top-12 md:right-0 -right-12 z-10 rounded-xl p-2"
    >
      Wishlist
    </div>
  );
};

export default Wishlist;
