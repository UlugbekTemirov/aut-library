import React from "react";

const Category = (props) => {
  const { categoryHandler } = props;

  return (
    <select
      onChange={categoryHandler}
      className="px-4 py-2 md:ml-8 ml-0 bg-white md:w-auto w-full rounded-xl outline-none md:mt-0 mt-2"
    >
      <option value="Barchasi" key="Barchasi">
        Barchasi
      </option>
      <option value="Badiiy" key="Badiiy">
        Badiiy
      </option>
      <option value="Ilmiy" key="Ilmiy">
        Ilmiy
      </option>
      <option value="Ingliz" key="Ingliz">
        Ingliz
      </option>
    </select>
  );
};

export default Category;
