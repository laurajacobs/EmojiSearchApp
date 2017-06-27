import React from 'react';
import ReactDOM from 'react-dom';

import emojis from './emojis.json';

import HomePage from './components/HomePage';



ReactDOM.render(<HomePage emojis={emojis} />, document.getElementById('root'));
