import React, { useState } from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import DateInput from '../date-input/date-input';
import Dropdown from '../dropdown/dropdown';
import InputText from '../input/input';
import './form.scss';

const Form = ({ countriesArray, onForm }) => {
  let maxId = 1;
  const [state, setState] = useState({
    name: '',
    surname: '',
    gender: false,
    dateOfBirth: '',
    country: '',
    zipcode: 0,
    notifications: false,
    treatment: false,
    id: 1,
  });
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
    onForm((oldState) => [...oldState, state])
    console.log(state);
  };

  return (
    <form action="POST" className="user-form" onSubmit={onClickBtnSubmit}>
      <InputText
        type="text"
        placeholder="Name"
        onChangeHandler={onChangeName}
      />
      <InputText
        type="text"
        placeholder="Surname"
        onChangeHandler={onChangeSurname}
      />
      <Checkbox
        classNameLabel="switch"
        classNameSpan="slider gender"
        display="Gender"
        onChangeHandler={onChangeGender}
      />
      <DateInput type="text" onChangeHandler={onChangeDate} />
      <Dropdown countries={countriesArray} onChangeHandler={onChangeCountry} />
      <InputText
        type="number"
        placeholder="Zip-code"
        onChangeHandler={onChangeZipcode}
      />
      <Checkbox
        classNameLabel="switch"
        classNameSpan="slider"
        display="Notifications"
        onChangeHandler={onChangeNotifications}
      />
      <Checkbox
        value="treatment"
        display="Processing of personal data"
        classNameLabel="checkbox-label"
        classNameSpan="hide"
        onChangeHandler={onChangeTreatment}
      />
      <Button />
    </form>
  );
};

export default Form;
