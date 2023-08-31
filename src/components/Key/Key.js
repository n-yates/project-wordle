import React from "react";

function Key({ children, status }) {
  const classes = status ? `key ${status}` : "key";
  return <span className={classes}>{children}</span>;
}

export default Key;
