import React, { useState } from 'react';
import Form from '../form/form';
import './app.scss';

const App = ({ countries }) => {
  const [formState, setFormState] = useState([]);

  console.log(formState)

  return (
    <>
      <Form
        countriesArray={countries}
        onForm={setFormState}
      />
    </>
  );
};

export default App;
