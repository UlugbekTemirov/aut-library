import React, { useState } from "react";
import GetAllCategoryApi from "../../../api/GetAllCategoryApi";

const Category = (props) => {
  const { categoryHandler } = props;

  const [cat, setCat] = useState([]);
  const [load, setLoad] = useState(false);

  GetAllCategoryApi(setCat, setLoad);
  const cats = cat?.data?.doc;

  return (
    <select
      onChange={categoryHandler}
      className="px-4 py-2 md:ml-8 ml-0 bg-white md:w-auto w-full rounded-xl outline-none md:mt-0 mt-2"
    >
      {load ? (
        <option value="loading">Loading...</option>
      ) : (
        <>
          <option value="barchasi">Barchasi</option>
          {cats?.map((item, index) => (
            <option key={index} value={item?.category}>
              {item?.category}
            </option>
          ))}
        </>
      )}
    </select>
  );
};

export default Category;
