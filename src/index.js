import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld handleClick={() => console.log('Ok')} />
  </React.StrictMode>,
  document.getElementById('root')
);
