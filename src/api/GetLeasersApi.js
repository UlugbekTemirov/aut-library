import React, { useEffect } from "react";
import { URL } from "../global";

// cookie
import Cookies from "universal-cookie";

const GetLeasersApi = (setLoading, setResponse, page, limit, update) => {
  // cookies
  const cookie = new Cookies();
  const jwt = cookie.get("jwt");

  useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/v1/leases?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    })
      .then((promise) => promise.json())
      .then((response) => {
        setResponse(response);
        setLoading(false);
      });
  }, [page, limit, update]);
};

export default GetLeasersApi;
