import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const addGuess = (value) => {
    setGuesses([...guesses, value]);
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessForm addGuess={addGuess} />
    </>
  );
}

export default Game;
