import React, { useState } from "react";
import PropTypes from "prop-types";
import "./form.css";

export const Form = ({ label }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [lost, setLost] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      console.log("ascasc");
      setLost(true);
    } else {
      setLost(false);
      console.log("values: ", { username, password });
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div className="storybook-form">
      <div className="wrapper">
        <div className="container">
          <h1>{label}</h1>
          <form className="form">
            <input
              className="storybook-form-input"
              type="text"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            ></input>
            <input
              className="storybook-form-input"
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            ></input>
            <button id="login-button" onClick={(e) => handleLogin(e)}>
              Login
            </button>
            <p
              className="validate"
              style={{ display: lost ? "block" : "none" }}
            >
              Please input your username and password{" "}
            </p>
          </form>
        </div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
        <div class="b"></div>
      </div>
    </div>
  );
};

Form.propTypes = {
  label: PropTypes.string,

  //   backgroundColor: PropTypes.string,

  //   type: PropTypes.oneOf(["success", "info", "warning", "error"]),

  //   size: PropTypes.oneOf(["large", "small"]),

  //   color: PropTypes.string,
};

Form.defaultProps = {
  //   backgroundColor: "green",
  //   type: "success",
  //   size: "large",
  //   color: "black",
  label: "Wellcome",
};
