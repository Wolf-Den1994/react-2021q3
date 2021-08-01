import React, { useState } from 'react';
import Form from '../form/form';
import Cards from '../cards/cards'
import './app.scss';

const App = ({ countries }) => {
  const [formState, setFormState] = useState([]);

  return (
    <>
      <Form
        countriesArray={countries}
        onForm={setFormState}
      />
      <Cards values={formState} />
    </>
  );
};

export default App;
