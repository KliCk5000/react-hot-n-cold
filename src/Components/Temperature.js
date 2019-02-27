import React from 'react';

function Temperature(props) {
  if (props.temperature) {
    return (
      <div>
        <span
          className={`tag is-large ${
            props.temperature.colorTag
          } has-text-weight-bold`}
        >
          {props.temperature.text}
        </span>
      </div>
    );
  } else {
    return <div />;
  }
}

export default Temperature;
