import React from 'react';
import Form from '../form/form';
import './app.scss';

const App = ({ countries }) => (
  <>
    <Form countriesArray={countries} />
  </>
);

export default App;
