import React from 'react';

function GameOver({ answer }) {
  return (
    <>
      <div>
        playagain
          </div>
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    </>
  );
}

export default GameOver;
