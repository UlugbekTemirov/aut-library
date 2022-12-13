import React, { useEffect } from "react";

import Cookies from "universal-cookie";

const Home = (props) => {
  const { setJwt } = props;
  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  useEffect(() => {
    setJwt(jwt);
  }, []);
  return <h2 className="text-2xl text-center">Home Page</h2>;
};

export default Home;
