import React, { useEffect } from "react";
import { URL } from "../global";

// cookie
import Cookies from "universal-cookie";

const GetHistoryApi = (setLoading, setResponse) => {
  // cookies
  const cookie = new Cookies();
  const jwt = cookie.get("jwt");

  useEffect(() => {
    setLoading(true);
    fetch(`${URL}/api/v1/leases/history`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    })
      .then((promise) => promise.json())
      .then((response) => {
        setLoading(false);
        setResponse(response);
      });
  }, []);
};

export default GetHistoryApi;
