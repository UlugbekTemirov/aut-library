import React from "react";

// url
import { URL } from "../global";

// cookies
import Cookies from "universal-cookie";

const LoginApi = (user, setLoading, setResponse, setError) => {
  const cookie = new Cookies();
  setLoading(true);

  const getResponseHandler = (response) => {
    setLoading(false);
    setResponse(response);
    const expire = new Date(response?.cookieOptions?.expires);
    if (response.status === "success") {
      cookie.set("jwt", response.token, {
        expires: expire,
      });
    }
    if (response.status !== "success") {
      setError(response.message);
    }
  };

  fetch(`${URL}/api/v1/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((promise) => promise.json())
    .then((response) => getResponseHandler(response));
};

export default LoginApi;
