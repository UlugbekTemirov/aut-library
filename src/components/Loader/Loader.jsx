import React from "react";

// style
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen absolute top-0 left-0">
      <div className="loader">
        <div className="loader book">
          <figure className="page"></figure>
          <figure className="page"></figure>
          <figure className="page"></figure>
        </div>

        <h1 className="text-navy">Loading</h1>
      </div>
    </div>
  );
};

export default Loader;
