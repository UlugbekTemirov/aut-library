import React, { useEffect } from "react";

import Cookies from "universal-cookie";

const Home = (props) => {
  const { setJwt } = props;
  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  useEffect(() => {
    setJwt(jwt);
  }, []);
  return <h1>Home</h1>;
};

export default Home;
