import React from 'react';
import './input.scss';

const InputText = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} className="input" />
);

export default InputText;
