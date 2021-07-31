import React from 'react';
import './data-input.scss';

const date = new Date();

const DateInput = ({ type }) => (
  <input type={type} min="1920-01-01" max={date} />
);

export default DateInput;
