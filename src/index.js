import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// Below is the array of products
import state from './state';


ReactDOM.render(
  <App products={state.products} />,
  document.getElementById('root')
);
