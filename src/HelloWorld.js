import React from 'react';

const HelloWorld = ({ handleClick }) => {
  const variable = 'Yeah';

  return (
    <>
      <h1>Hello World {variable}</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default HelloWorld;
