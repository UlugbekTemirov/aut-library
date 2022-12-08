import React from "react";

const Category = (props) => {
  const { categoryHandler } = props;

  return (
    <select
      onChange={categoryHandler}
      className="px-4 py-2 md:ml-8 ml-0 bg-white md:w-auto w-full rounded-xl outline-none"
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
