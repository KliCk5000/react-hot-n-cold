import React from 'react';

const Header = (props) => {
  const { minNumber, maxNumber } = props.gameSettings;
  return (
    <div>
      <h1 className="title is-2">Make your Guess</h1>
      <p className="content is-medium">
        Pick a number between {minNumber} and {maxNumber}
      </p>
    </div>
  );
};

export default Header;
