import React, { useState } from 'react';
import Form from '../form/form';
import Cards from '../cards/cards';
import Error from '../error/error';
import './app.scss';

const App = ({ countries }) => {
  const [formState, setFormState] = useState([]);
  const [errorState, setErrorState] = useState(false);

  return (
    <>
      <Form
        countriesArray={countries}
        onForm={setFormState}
        onError={setErrorState}
      />
      <Cards values={formState} />
      {errorState ? <Error /> : null}
    </>
  );
};

export default App;
