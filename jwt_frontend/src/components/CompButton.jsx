import React from 'react';

const CompButton = (props) => {
  const { handleClick, text } = props;

  return <button onClick={handleClick}>Submit</button>;
};

export default CompButton;
