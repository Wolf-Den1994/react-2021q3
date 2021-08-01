import React from 'react';
import './input.scss';

const InputText = ({ type, placeholder, onChangeHandler }) => (
  <label className="label-input">
    {placeholder}
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      onChange={onChangeHandler}
    />
  </label>
);

export default InputText;
