import React from "react";
import { useParams } from "react-router-dom";

const Information = (props) => {
  const { bookslug } = useParams();

  console.log(bookslug);

  return <h2>Information</h2>;
};

export default Information;
