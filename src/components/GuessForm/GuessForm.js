import React, { useState } from "react";

function GuessForm({ addGuess, disableInput }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addGuess(guess);
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
        title="5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        disabled={disableInput}
      />
    </form>
  );
}

export default GuessForm;
