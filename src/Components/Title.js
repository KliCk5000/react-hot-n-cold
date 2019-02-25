import React from 'react';

const Title = (props) => {
  return (
    <h1 className="title is-1">
      <span className="has-text-danger">Hot</span> or{' '}
      <span className="has-text-link">Cold</span>
    </h1>
  );
};

export default Title;
