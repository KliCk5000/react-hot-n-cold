import React from 'react';

const GuessNumber = (props) => {
  if (props.gameIsRunning) {
    return (
      <div>
        <span className="content is-medium guessed-number">
          This is your Guess #{props.numberOfGuesses + 1}!
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="content is-medium guessed-number">
          You guessed the number in {props.numberOfGuesses} Guesses!
        </span>
      </div>
    );
  }
};

export default GuessNumber;
