import React from "react";
import "../css/Button.css";

function Button(props) {
  const { name ,filled} = props;
  return <button className={`${filled? 'filled':'outlined'}`}>{name}</button>;
}

export default Button;
