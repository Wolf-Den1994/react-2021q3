import React from 'react';
import './input.scss';

const InputText = ({
  type, placeholder, onChangeHandler, error,
}) => (
  <label className="label-input">
    <span>
      {placeholder}
      {' '}
    </span>
    <span>
      {!error && (
        <span className="error">
          * enter
          {placeholder.toLowerCase()}
        </span>
      )}
    </span>
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      onChange={onChangeHandler}
    />
  </label>
);

export default InputText;
