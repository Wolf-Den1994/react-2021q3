import React, { useState } from 'react';
import Form from '../form/form';
import Cards from '../cards/cards';
import Error from '../error/error';
import Success from '../success/success';

const App = ({ countries }) => {
  const [formState, setFormState] = useState([]);
  const [errorState, setErrorState] = useState(false);
  const [successState, setSuccessState] = useState(false);

  return (
    <>
      <Form
        countriesArray={countries}
        onForm={setFormState}
        onError={setErrorState}
        onSuccess={setSuccessState}
      />
      <Cards values={formState} />
      {errorState ? <Error /> : null}
      {successState ? <Success /> : null}
    </>
  );
};

export default App;
