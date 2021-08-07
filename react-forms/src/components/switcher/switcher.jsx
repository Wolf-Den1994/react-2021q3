import React from 'react';
import './switcher.scss';

const Switcher = ({ onChangeMale, onChangeFemale, value }) => {
  return (
    <div className="switch-field">
      <label htmlFor="radio-one">
        Male
        <input
          type="radio"
          id="radio-one"
          name="switch-one"
          value="male"
          onChange={onChangeMale}
          checked={value.male}
        />
      </label>
      <label htmlFor="radio-two">
        Female
        <input
          type="radio"
          id="radio-two"
          name="switch-one"
          value="female"
          onChange={onChangeFemale}
          checked={value.female}
        />
      </label>
    </div>
  );
};

export default Switcher;
