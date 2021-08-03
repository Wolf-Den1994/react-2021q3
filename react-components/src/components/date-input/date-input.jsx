import React from 'react';
import './data-input.scss';

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const DateInput = ({ type, onChangeHandler, error }) => {
  const onChangeTypeInput = (e) => {
    e.currentTarget.type = 'date';
    e.currentTarget.focus();
  };

  return (
    <label className="label-date">
      <span>Date of Birth</span>
      <span>
        {!error && (
          <span className="error">
            * enter
            {'Date of Birth'.toLowerCase()}
          </span>
        )}
      </span>
      <input
        type={type}
        placeholder="Date of Birth"
        min="1920-01-01"
        max={`${yyyy}-${mm}-${dd}`}
        onFocus={onChangeTypeInput}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default DateInput;
