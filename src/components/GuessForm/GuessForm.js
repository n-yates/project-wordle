import React, { useState } from "react";

function GuessForm() {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        maxLength={5}
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
