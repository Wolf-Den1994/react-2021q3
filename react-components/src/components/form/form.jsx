import React from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import DateInput from '../date-input/date-input';
import Dropdown from '../dropdown/dropdown';
import InputText from '../input/input';
import './form.scss';

const Form = ({
  countriesArray,
  onChangeName,
  onChangeSurname,
  onChangeZipcode,
  onChangeGender,
  onChangeNotifications,
  onChangeTreatment,
  onClickBtn,
  onChangeDate,
  onChangeCountry,
}) => (
  <form action="POST" className="user-form" onSubmit={onClickBtn}>
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

export default Form;
