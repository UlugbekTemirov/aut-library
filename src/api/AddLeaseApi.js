import { SignalWifiStatusbarConnectedNoInternet4Outlined } from "@mui/icons-material";
import React, { useEffect } from "react";

// global
import { URL, JWT } from "../global";

const AddLeaseApi = (setLoading, setResponse, student) => {
  setLoading(true);
  fetch(`${URL}/api/v1/leases`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${JWT}`,
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
