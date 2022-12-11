import React, { useState } from "react";

// style
import "./Login.css";

// api
import LoginApi from "../../api/LoginApi";

// component
import Loader from "../Loader/Loader";

// react-router-dom
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigate
  const navigate = useNavigate();

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const SubmitHandler = () => {
    const user = { email, password };
    LoginApi(user, setLoading, setResponse, setError);
    setEmail("");
    setPassword("");
  };

  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      SubmitHandler();
    }
  };

  if (loading) return <Loader />;

  if (response.status === "success") {
    navigate("/home");
  }

  return (
    <div className="login-container">
      <div className="login-page"></div>
      <form className="login-form" onKeyDown={enterHandler}>
        <div className="width">
          <h2 className="login-text">Login</h2>
        </div>
        <div className="input-handler">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            className="my-input"
            type="email"
            placeholder="example@gmail.com"
            id="email"
            value={email}
            onChange={EmailHandler}
          />
        </div>
        <div className="input-handler">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="my-input"
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={PasswordHandler}
          />
        </div>
        <button onClick={SubmitHandler} className="myButton" type="button">
          Submit
        </button>
        {error && (
          <h2 className="text-center mt-3 text-2xl text-red-600">{error}</h2>
        )}
      </form>
    </div>
  );
};

export default Login;
