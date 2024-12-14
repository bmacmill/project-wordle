import React from 'react';

function GameWon({guesses }) {

  return (

    
    
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
    <strong>{" "}{guesses.length} guess{guesses.length > 1 ? "es" : null}</strong>.
  </p>
      </div>
   


  )

}

export default GameWon;
