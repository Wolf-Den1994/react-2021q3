import React from 'react';
import './input.scss';

const InputText = ({
  type, placeholder, onChangeHandler,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="input"
    onChange={onChangeHandler}
  />
);

export default InputText;
