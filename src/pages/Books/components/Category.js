import React from "react";

const Category = (props) => {
  const { categoryHandler } = props;

  return (
    <select
      onChange={categoryHandler}
      className="rounded px-4 py-2 ml-8 bg-white"
    >
      <option value="barchasi" key="barchasi">
        Barchasi
      </option>
      <option value="badiiy" key="badiiy">
        Badiiy
      </option>
      <option value="ilmiy" key="ilmiy">
        Ilmiy
      </option>
      <option value="ingliz" key="ingliz">
        Ingliz
      </option>
    </select>
  );
};

export default Category;
