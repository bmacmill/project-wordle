import React from 'react';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from "../../game-helpers.js"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function handleInputGuess(inputText) {

    const nextGuess = {
      guess: inputText,
      id: crypto.randomUUID()
    }
    const allGuesses = [...guesses, nextGuess]

    setGuesses(allGuesses)
  }

  return <>

    <GuessList guesses={guesses} answer={answer}/>
    <GuessInput handleInputGuess={handleInputGuess} />

  </>;
}

export default Game;
