import React from "react";
import Key from "../Key/Key";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  /* converts [{letter: 'A', status: 'correct'}, {letter: 'B', status: 'incorrect'}]
    to {'A': 'correct', 'B': 'incorrect'}
    which allows accesing a letter's status via statusObj[letter] (statusObj['A'] or statusObj['B']
  */
  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div>
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <Key key={letter} status={statusByLetter[letter]}>
              {letter}
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
