import React from "react";

// global
import { URL } from "../global";

// cookies
import Cookies from "universal-cookie";

const GetStudentsApi = (setLoading, setResponse, id) => {
  const cookie = new Cookies();
  const jwt = cookie.get("jwt");
  setLoading(true);
  fetch(`${URL}/api/v1/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  })
    .then((promise) => promise.json())
    .then((response) => {
      setLoading(false);
      setResponse(response);
    });
};

export default GetStudentsApi;
