import { useEffect } from "react";
import { URL } from "../global";

import Cookies from "universal-cookie";
const cookie = new Cookies();

const AddCategoryApi = (setResponse, setLoading, category) => {
  const jwt = cookie.get("jwt", { path: "/" });
  setLoading(true);
  fetch(`${URL}/api/v1/books/category`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({ category }),
  }).then((res) => {
    setResponse(res);
    setLoading(false);
    res.json();
  });
};

export default AddCategoryApi;
