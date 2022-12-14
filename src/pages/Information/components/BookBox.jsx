import React from "react";

const BookBox = ({ children, icon }) => {
  return (
    <div className="flex border-2 border-blue-800 rounded-xl items-center bg-blue-100 mt-2">
      <img className="w-10 rounded-l-lg p-1 ml-1" src={icon} alt="bookicon" />
      <h2 className="text-xl ml-2">{children}</h2>
    </div>
  );
};

export default BookBox;
