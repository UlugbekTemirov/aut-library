import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-screen h-screen bg-gray-800 opacity-60 absolute"
    ></div>
  );
};

export default Backdrop;
