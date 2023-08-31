import React from "react";
import Banner from "../Banner";

function WinnerBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status="happy" action={handleRestart} actionText="Restart">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses} {numOfGuesses > 1 ? "guesses" : "guess"}
        </strong>
      </p>
    </Banner>
  );
}

export default WinnerBanner;
