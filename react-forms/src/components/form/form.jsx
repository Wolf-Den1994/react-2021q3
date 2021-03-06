import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import DateInput from '../date-input/date-input';
import Dropdown from '../dropdown/dropdown';
import InputText from '../input/input';
import Switcher from '../switcher/switcher';
import './form.scss';

const Form = ({ countriesArray, onForm, onError, onSuccess }) => {
  const initialData = {
    name: '',
    surname: '',
    male: true,
    female: false,
    dateOfBirth: '',
    country: '',
    zipcode: '',
    notifications: false,
    treatment: false,
  };

  const [state, setState] = useState({ ...initialData, id: 1 });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors((store) => ({ ...store, ...state }));
  }, [state]);

  const reset = () => {
    setState((store) => ({ ...store, ...initialData }));
  };

  const onChangeName = (event) => {
    setState({ ...state, name: event.target.value });
  };
  const onChangeSurname = (event) => {
    setState({ ...state, surname: event.target.value });
  };
  const onChangeMale = (event) => {
    setState({
      ...state,
      male: event.target.checked,
      female: !event.target.checked,
    });
  };
  const onChangeFemale = (event) => {
    setState({
      ...state,
      female: event.target.checked,
      male: !event.target.checked,
    });
  };
  const onChangeDate = (event) => {
    setState({ ...state, dateOfBirth: event.target.value });
  };
  const onChangeCountry = (event) => {
    setState({ ...state, country: event.target.value });
  };
  const onChangeZipcode = (event) => {
    setState({ ...state, zipcode: event.target.value });
  };
  const onChangeNotifications = (event) => {
    setState({ ...state, notifications: event.target.checked });
  };
  const onChangeTreatment = (event) => {
    setState({ ...state, treatment: event.target.checked });
  };

  const validateSubmit = (newState) => {
    let counterProperty = 0;
    Object.keys(newState).forEach((key) => {
      if (key !== 'notifications' && key !== 'id') {
        if (newState[key]) counterProperty++;
      }
    });
    return counterProperty === 7;
  };

  const onClickBtnSubmit = (event) => {
    event.preventDefault();
    const newState = { ...state, id: state.id++ };
    if (validateSubmit(newState)) {
      onForm((oldState) => [...oldState, newState]);
      reset();
      onSuccess(true);
      setTimeout(() => {
        onSuccess(false);
      }, 1300);
    } else {
      onError(true);
      setTimeout(() => {
        onError(false);
      }, 1300);
    }
  };

  return (
    <form action="POST" className="user-form" onSubmit={onClickBtnSubmit}>
      <div className="top-form">
        <div className="left-form">
          <InputText
            type="text"
            placeholder="Name"
            onChangeHandler={onChangeName}
            error={errors.name}
            value={state.name}
          />
          <InputText
            type="text"
            placeholder="Surname"
            onChangeHandler={onChangeSurname}
            error={errors.surname}
            value={state.surname}
          />
          <Switcher
            onChangeMale={onChangeMale}
            onChangeFemale={onChangeFemale}
            value={state}
          />
        </div>
        <div className="right-form">
          <DateInput
            type="text"
            onChangeHandler={onChangeDate}
            error={errors.dateOfBirth}
            value={state.dateOfBirth}
          />
          <Dropdown
            countries={countriesArray}
            onChangeHandler={onChangeCountry}
            error={errors.country}
            initialValue={state.country}
          />
          <InputText
            type="number"
            placeholder="Zip-code"
            onChangeHandler={onChangeZipcode}
            error={errors.zipcode}
            value={state.zipcode}
          />
          <Checkbox
            classNameLabel="switch"
            classNameSpan="slider"
            display="Notifications"
            onChangeHandler={onChangeNotifications}
            value={state.notifications}
          />
        </div>
      </div>
      <Checkbox
        name="treatment"
        display="Processing of personal data"
        classNameLabel="checkbox-label"
        classNameSpan="hide"
        onChangeHandler={onChangeTreatment}
        error={errors.treatment}
        value={state.treatment}
      />
      <Button />
    </form>
  );
};

export default Form;
