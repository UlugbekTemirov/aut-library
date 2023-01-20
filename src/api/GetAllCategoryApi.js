import { useEffect } from "react";
import { URL } from "../global";

const GetAllCategoryApi = (setResponse, setLoading, update) => {
  useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/v1/books/category`)
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setLoading(false);
      });
  }, [update]);
};

export default GetAllCategoryApi;
