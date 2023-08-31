import React from "react";

function RestartButton({ text, clickHandler, className }) {
  return (
    <div className="button-wrapper">
      <button type="button" className={className} onClick={clickHandler}>
        {text}
      </button>
    </div>
  );
}

export default RestartButton;
