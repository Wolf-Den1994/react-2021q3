import React from 'react';
import './input.scss';

const InputText = ({ type, placeholder, onChangeHandler, error, value }) => (
  <label className="label-input">
    <span>{placeholder}</span>
    <span>
      {!error && (
        <span className="error">
          <span>* enter </span>
          {placeholder.toLowerCase()}
        </span>
      )}
    </span>
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      onChange={onChangeHandler}
      value={value}
    />
  </label>
);

export default InputText;
