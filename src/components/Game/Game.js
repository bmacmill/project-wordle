import React from 'react';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameWon from '../GameWon'
import GameOver from '../GameOver'

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.log({ answer })
function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameEnded, setGameEnded] = React.useState(false)
  const [isWinner, setIsWinner] = React.useState(false)
  function handleInputGuess(inputText) {

    const nextGuess = {
      guess: inputText,
      id: crypto.randomUUID()
    }
    const allGuesses = [...guesses, nextGuess]

    setGuesses(allGuesses)
  }

  React.useEffect(() => {
    for (let guess of guesses) {
      if (guess.guess === answer) {
        setGameEnded(true)
        setIsWinner(true)
      }
    }
  }, [guesses])

  React.useEffect(() => {
    if (guesses.length === 6) {
      setGameEnded(true)
    }
  }, [guesses])
  return (
    <>

      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleInputGuess={handleInputGuess} gameEnded={gameEnded} />
      {gameEnded && isWinner ? <GameWon guesses={guesses} /> : null}
      {gameEnded && !isWinner ? <GameOver answer={answer} /> : null}

    </>
  );
}

export default Game;

