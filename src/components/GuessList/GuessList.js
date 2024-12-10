import React from 'react';
import GuessInput from '../GuessInput';

function GuessList() {
  const [guessList, setGuessList] = React.useState([""])

  function handleInputGuess(inputText) {
    const nextGuess = {
      guess: inputText,
      id: crypto.randomUUID()
    }
    const allGuesses = [...guessList, nextGuess]
    console.log({ guessList })
    setGuessList(allGuesses)
  }
  return <div className="guess-results">
    {guessList.length > 0 && guessList.map((el) => (

      <p key={el.id} className="guess" > {el.guess}</p>
    )
    )}
    <GuessInput handleInputGuess={handleInputGuess} />
  </div>;
}

export default GuessList;
