import React from "react";

const BookBox = ({ children, icon }) => {
  return (
    <div className="flex border border-gray-500 rounded-xl items-center bg-gray-200 mt-2">
      <img className="w-10 rounded-l-lg p-1 ml-1" src={icon} alt="bookicon" />
      <h2 className="text-xl ml-2">{children}</h2>
    </div>
  );
};

export default BookBox;
