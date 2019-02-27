import React from 'react';
import './Header.css';

const Header = (props) => {
  const {minNumber, maxNumber } = props.gameSettings;

  if (props.gameIsRunning) {
    return (
      <div>
        <h1 className="pick-number title is-4">
          Pick a number between {minNumber} and {maxNumber}
        </h1>
      </div>
    );
  } else {
    return <div />;
  }
};

export default Header;
