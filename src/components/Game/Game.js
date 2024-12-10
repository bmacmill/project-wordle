import React from 'react';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Guess from '../Guess';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

console.log({ answer })
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
    {/* <Guess guesses={guesses}/> */}
    <GuessList guesses={guesses} />
    <GuessInput handleInputGuess={handleInputGuess} />

  </>;
}

export default Game;
