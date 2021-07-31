import React from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import DateInput from '../date-input/date-input';
import Dropdown from '../dropdown/dropdown';
import InputText from '../input/input';
import './form.scss';

const Form = ({ countriesArray }) => (
  <form action="POST" className="user-form">
    <InputText type="text" placeholder="Name" />
    <InputText type="text" placeholder="Surname" />
    <Checkbox classNameLabel="switch" classNameSpan="slider gender" display="Gender" />
    <DateInput type="date" />
    <Dropdown countries={countriesArray} />
    <InputText type="number" placeholder="Zip-code" />
    <Checkbox
      value="treatment"
      display="Processing of personal data"
      classNameLabel="checkbox-label"
      classNameSpan="hide"
    />
    <Checkbox classNameLabel="switch" classNameSpan="slider" display="Notifications" />
    <Button />
  </form>
);

export default Form;
