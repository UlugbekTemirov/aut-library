import { SignalWifiStatusbarConnectedNoInternet4Outlined } from "@mui/icons-material";
import React, { useEffect } from "react";

// cookies
import Cookies from "universal-cookie";
const cookie = new Cookies();

// global
import { URL } from "../global";

const AddLeaseApi = (setLoading, setResponse, student) => {
  const jwt = cookie.get("jwt", { path: "/" });
  setLoading(true);
  fetch(`${URL}/api/v1/leases`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(student),
  })
    .then((promise) => promise.json())
    .then((response) => {
      setLoading(false);
      setResponse(response);
    });
};

export default AddLeaseApi;
