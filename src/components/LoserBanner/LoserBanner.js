import React from "react";
import Banner from "../Banner/Banner";

function LoserBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad" action={handleRestart} actionText="Restart">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </Banner>
  );
}

export default LoserBanner;
