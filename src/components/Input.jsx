import React from "react";
import "../style/style.css";

const Input = ({ type, placeholder, change, classname, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={change}
      className={classname}
      value={value}
    />
  );
};

export default Input;
