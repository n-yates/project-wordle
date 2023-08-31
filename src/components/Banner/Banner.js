import React from "react";
import RestartButton from "../RestartButton/RestartButton";

function Banner({ status, action, actionText, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && (
        <RestartButton
          clickHandler={action}
          text={actionText}
          className="button primary"
        />
      )}
    </div>
  );
}

export default Banner;
