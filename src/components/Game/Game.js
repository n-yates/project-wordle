import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED, WON, LOST, PLAYING } from "../../constants";
import WinnerBanner from "../WinnerBanner";
import LoserBanner from "../LoserBanner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState(PLAYING);

  const addGuess = (value) => {
    const nextGuesses = [...guesses, value];
    setGuesses(nextGuesses);

    if (value === answer) {
      setGameStatus(WON);
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(LOST);
    }
  };

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessForm addGuess={addGuess} disableInput={gameStatus !== PLAYING} />
      {gameStatus === WON && <WinnerBanner numOfGuesses={guesses.length} />}
      {gameStatus === LOST && <LoserBanner answer={answer} />}
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
