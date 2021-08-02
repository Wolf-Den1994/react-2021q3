import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import DateInput from '../date-input/date-input';
import Dropdown from '../dropdown/dropdown';
import InputText from '../input/input';
import './form.scss';

const Form = ({ countriesArray, onForm, onError }) => {
  const validate = () => {
    setErrors({})
    console.log(errors)
    if (!state.name) {
      setErrors((store)=>({...store, state}))
    }
  }
  const [state, setState] = useState({
    name: '',
    surname: '',
    gender: false,
    dateOfBirth: '',
    country: '',
    zipcode: null,
    notifications: false,
    treatment: false,
    id: 1,
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    validate();
  }, [state])
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
    setState({ ...state, country: event.target.value });
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

  const validateSubmit = (newState) => {
    let counterProperty = 0;
    for (let key in newState) {
      if (key === 'gender' || key === 'notifications' || key === 'id') continue;
      if (newState[key]) counterProperty++;
    }
    return counterProperty === 6;
  }

  const onClickBtnSubmit = (event) => {
    event.preventDefault();
    const newState = {...state, id: state.id++}
    if (validateSubmit(newState)) {
      onForm((oldState) => [...oldState, newState]);
    } else {
      onError((store) => store = true)
      setTimeout(() => {
        onError((store) => store = false)
      }, 1300);
    }
    
    // console.log(state);
  };

  return (
    <form action="POST" className="user-form" onSubmit={onClickBtnSubmit}>
      <div className="top-form">
        <div className="left-form">
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
        </div>
        <div className="right-form">
          <DateInput type="text" onChangeHandler={onChangeDate} />
          <Dropdown
            countries={countriesArray}
            onChangeHandler={onChangeCountry}
          />
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
        </div>
      </div>
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
