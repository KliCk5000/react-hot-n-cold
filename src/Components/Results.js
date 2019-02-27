import React from 'react';

import GuessNumber from './GuessNumber';
import PreviousGuesses from './PreviousGuesses';
import Temperature from './Temperature';

const Results = (props) => {
  const numberOfGuesses = props.previousGuesses.length;

  let temp = false;
  if (props.previousGuesses.length >= 1) {
    temp = (props.previousGuesses[props.previousGuesses.length - 1].temperature);
  } else {
    temp = 0;
  }
  
  return (
    <div>
      <Temperature temperature={temp} />
      <GuessNumber gameIsRunning={props.gameIsRunning} numberOfGuesses={numberOfGuesses} />
      <PreviousGuesses previousGuesses={props.previousGuesses} />
    </div>
  );
};

export default Results;
