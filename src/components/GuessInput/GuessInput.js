import React from 'react';
// import "../../styles.css"

function GuessInput({ handleInputGuess, gameEnded }) {
  const [inputText, setInputText] = React.useState('')

  return <form className="guess-input-wrapper" onSubmit={((e) => {
    e.preventDefault()

    handleInputGuess(inputText)
    setInputText("")
  })
  }>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input"
      required
      type="text"
      pattern="[A-Za-z]{5}"
      minLength={5}
      maxLength={5}
      title="5 letter word"
      value={inputText}
      //disable={inputText.length < 4 ? "true" : "false"}
      disabled={gameEnded}
      onChange={(e) => {
        const upperGuess = e.target.value.toUpperCase()
        setInputText(upperGuess)
      }}
    />
  </form >

}

export default GuessInput;
