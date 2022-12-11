import React from "react";
import { URL } from "../global";

import Cookies from "universal-cookie";
const cookie = new Cookies();

const DeleteHistoryApi = (setLoading, setResponse) => {
  const jwt = cookie.get("jwt", { path: "/" });
  setLoading(true);
  fetch(`${URL}/api/v1/leases/history`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((promise) => promise.json())
    .then((response) => {
      setLoading(false);
      setResponse(response);
    });
};

export default DeleteHistoryApi;
