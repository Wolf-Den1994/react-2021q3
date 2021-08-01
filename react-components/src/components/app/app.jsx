import React, { useState } from 'react';
import Form from '../form/form';
import './app.scss';

const App = ({ countries }) => {
  let maxId = 1;
  const [
    state = {
      data: [
        {
          name: '',
          surname: '',
          gender: false,
          dateOfBirth: '',
          country: '',
          zipcode: 0,
          notifications: false,
          treatment: false,
          id: 1,
        },
      ],
    },
    setState,
  ] = useState();
  const onChangeName = (event) => {
    setState({ ...state, name: event.target.value });
  };
  const onChangeSurname = (event) => {
    setState({ ...state, surname: event.target.value });
  };
  const onChangeGender = (event) => {
    setState({ ...state, gender: event.target.checked });
  };
  const onChangeDate = (event) => {
    setState({ ...state, dateOfBirth: event.target.value });
  };
  const onChangeCountry = (event) => {
    setState({ ...state, country: event.target.value, keys: maxId++ });
  };
  const onChangeZipcode = (event) => {
    setState({ ...state, zipcode: +event.target.value });
  };
  const onChangeNotifications = (event) => {
    setState({ ...state, notifications: event.target.checked });
  };
  const onChangeTreatment = (event) => {
    setState({ ...state, treatment: event.target.checked });
  };

  const onClickBtnSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <>
      <Form
        countriesArray={countries}
        onChangeName={onChangeName}
        onChangeSurname={onChangeSurname}
        onChangeZipcode={onChangeZipcode}
        onChangeGender={onChangeGender}
        onChangeNotifications={onChangeNotifications}
        onChangeTreatment={onChangeTreatment}
        onClickBtn={onClickBtnSubmit}
        onChangeDate={onChangeDate}
        onChangeCountry={onChangeCountry}
      />
    </>
  );
};

export default App;
