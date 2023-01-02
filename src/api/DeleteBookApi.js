import React from "react";
import { URL } from "../global";

// cookie
import Cookies from "universal-cookie";

const DeleteBookApi = (id) => {
  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  setLoading(true);
  fetch(`${URL}/api/v1/books/${id}`, {
    method: "DELETE",
    authorization: `Bearer ${jwt}`,
  });
};

export default DeleteBookApi;
