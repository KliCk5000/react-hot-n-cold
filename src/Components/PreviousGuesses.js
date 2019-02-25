import React from 'react';
import './PreviousGuesses.css';

const PreviousGuesses = (props) => {
    const displayList = props.previousGuesses.map((guess) => (
      <span className="tag is-link is-medium" key={guess.id}>
        {guess.guessNumber}
      </span>
    ));

    return (
      <div>
        <p className="content is-medium">List of guessed numbers:</p>
        <div className="tags">{displayList}</div>
      </div>
    );
  }

export default PreviousGuesses;
