import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import countriesArray from './countries';
import './styles.scss';

ReactDOM.render(
  <App countries={countriesArray} />,
  document.getElementById('root'),
);
