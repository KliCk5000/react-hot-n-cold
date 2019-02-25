import React from 'react';

import GuessNumber from './GuessNumber';
import PreviousGuesses from './PreviousGuesses';

const Results = (props) => {
  return (
    <div>
      <GuessNumber />
      <PreviousGuesses previousGuesses={props.previousGuesses}/>
    </div>
  );
};

export default Results;
