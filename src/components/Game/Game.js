import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED, WON, LOST, PLAYING } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessForm from "../GuessForm";
import GuessList from "../GuessList";
import WinnerBanner from "../WinnerBanner";
import LoserBanner from "../LoserBanner";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = useState(() => {
    const newAnswer = sample(WORDS);
    console.info({ newAnswer });
    return newAnswer;
  });

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

  const restartGame = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus(PLAYING);
    console.info({ newAnswer });
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessForm addGuess={addGuess} disableInput={gameStatus !== PLAYING} />
      {gameStatus === WON && (
        <WinnerBanner
          numOfGuesses={guesses.length}
          handleRestart={restartGame}
        />
      )}
      {gameStatus === LOST && (
        <LoserBanner answer={answer} handleRestart={restartGame} />
      )}
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
