import React from 'react';
import Guess from "../Guess"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js"
import { range } from "../../utils.js"

function GuessList({ guesses, answer }) {

  return <div className="guess-results">

    {/* {range(NUM_OF_GUESSES_ALLOWED).map((num, i) => (


      <Guess value={guesses[num]} key={num} />
    ))} */}

    {/* {guess.split("").map((el, i) => <span key={i} className="cell">{el}</span>)} */}



    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <Guess answer={answer} value={guesses[num]} key={num} />
    ))}
  </div>;
}

export default GuessList;
