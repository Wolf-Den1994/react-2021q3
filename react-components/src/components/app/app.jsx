import React, { useState } from 'react';
import Form from '../form/form';
import './app.scss';

const App = ({ countries }) => {
  const [name, setName] = useState();
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const [surname, setSurname] = useState();
  const onChangeSurname = (event) => {
    setSurname(event.target.value);
  };

  const [zipcode, setZipcode] = useState();
  const onChangeZipcode = (event) => {
    setZipcode(event.target.value);
  };

  const [gender, setGender] = useState();
  const onChangeGender = (event) => {
    setGender(event.target.checked);
  };

  const [notifications, setNotifications] = useState();
  const onChangeNotifications = (event) => {
    setNotifications(event.target.checked);
  };

  const [treatment, setTreatment] = useState();
  const onChangeTreatment = (event) => {
    setTreatment(event.target.checked);
  };

  const [dateOfBirth, setdateOfBirth] = useState();
  const onChangeDate = (event) => {
    setdateOfBirth(event.target.value);
  };

  const [country, setCountry] = useState();
  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const onClickBtnSubmit = (event) => {
    event.preventDefault();
    console.log(name, surname, gender, dateOfBirth, country, zipcode, notifications, treatment);
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
