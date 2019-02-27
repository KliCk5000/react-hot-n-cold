import React from 'react';
import './PreviousGuesses.css';

const PreviousGuesses = (props) => {
  const displayList = props.previousGuesses.map((guess) => {
    return (
      <span className="tag is-link is-medium" key={guess.id}>
        {guess.guessNumber}
      </span>
    );
  });

  if (props.previousGuesses.length > 0) {
    return (
      <div>
        <span className="content is-medium">Previously guessed numbers:</span>
        <div className="tags">{displayList}</div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default PreviousGuesses;
