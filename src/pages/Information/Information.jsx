import React, { useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// api
import GetBookApi from "../../api/GetBookApi";

// components
import { Loader } from "../../components";
import BookInfo from "./components/BookInfo";

const Information = (props) => {
  const { bookslug } = useParams();

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({});
  GetBookApi(setLoading, setResponse, bookslug);

  const book = response?.data?.doc[0];

  if (Boolean(book)) return <BookInfo book={book} />;
  else return loading ? <Loader /> : <h2>Bunday kitob mavjud emas</h2>;
};

export default Information;
