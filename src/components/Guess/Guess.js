import React from 'react';
import { range } from "../../utils.js"
import { checkGuess } from "../../game-helpers.js"


function Guess({ value }) {


    return (<p className="guess">
        {/* {range(5).map((num, i) => (
            <span key={num} className="cell">{value ? value.guess[num] : undefined}</span>

        ))
        } */}


        {range(5).map((_, index) => (
            <span key={index} className="cell">{value ? value.guess[index] : undefined}</span>
        )
        )}
    </p >
    )


}

export default Guess;



// There are two things that should help you tackle this exercise:

// You can use the range utility to create arrays of a specified length to map over. It's provided in /src/utils.js. Check out the “Range Utility” lesson in the course for more info on how to use it.
// Inside /src/constants.js, you'll find a constant, NUM_OF_GUESSES_ALLOWED. You should import and use this constant when generating the set of guesses. This would make it easy for us to change the difficulty of the game later on, by increasing/decreasing the # of guesses.
// Acceptance Criteria:

// Create a new Guess component. 6 instances should be rendered at all times, no matter how many guesses have been submitted.
// The Guess component should render 5 spans, each with the class of cell.
// Each cell should contain a letter, if the Guess instance has been given a value. If not, the cell should be blank.
// Use the NUM_OF_GUESSES_ALLOWED constant, when needed.
// No key warnings in the console.

{/* <p class="guess">
<span class="cell">H</span>
<span class="cell">E</span>
<span class="cell">L</span>
<span class="cell">L</span>
<span class="cell">O</span>
</p> */}