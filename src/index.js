import React from 'react';
import ReactDOM from 'react-dom';

const MyFirstComponent = React.createElement(
  'h1', 
  { style: { color: 'cornflowerblue' } }, 
  'Welcome to React!'
);

ReactDOM.render(Hello, document.getElementById('root'));
