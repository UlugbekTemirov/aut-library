import React from "react";

const Wishlist = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute flex flex-col items-center justify-center border-2 bg-gray-400 md:w-96 w-80 h-36 top-12 md:right-0 -right-12 z-10 rounded-xl p-2"
    >
      <h2 className="text-center opacity-60 text-lg text-black">
        available on version 2.0.0
      </h2>
    </div>
  );
};

export default Wishlist;
