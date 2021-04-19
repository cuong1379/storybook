import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.css";

export const Input = ({
  inputType,
  inputName,
  placeholder,
  size,
  disable,
  ...props
}) => {
  //   const mode = disable ? "storybook-input--disable" : false;
  const [values, setValues] = useState();

  const handleValueChange = (e) => {
    console.log("values: ", e);
    setValues(e);
  };
  return (
    <input
      className={["storybook-input", `storybook-input--${size}`].join(" ")}
      onChange={(event) => handleValueChange(event.target.value)}
      value={values}
      type={inputType}
      name={inputName}
      placeholder={placeholder}
    ></input>
  );
};

Input.propTypes = {
  inputType: PropTypes.oneOf(["text", "number", "password"]),

  inputName: PropTypes.string,

  placeholder: PropTypes.string,

  size: PropTypes.oneOf(["large", "small"]),

  disable: PropTypes.bool,

  onChange: PropTypes.func,
};

Input.defaultProps = {
  inputType: "text",
  inputName: "usename",
  placeholder: "Basic input",
  size: "large",
  disable: "false",
  onChange: () => {},
};
