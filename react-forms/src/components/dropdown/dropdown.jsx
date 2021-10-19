import React from 'react';
import './dropdown.scss';

const initialCountry = 'your country';

const Dropdown = ({ countries, onChangeHandler, error, initialValue }) => {
  const countriesSort = countries.sort();
  const countriesArray = countriesSort.map((countyObj) => {
    const low = countyObj.country.toLowerCase();
    return (
      <option value={low} key={countyObj.id} disabled={low === initialCountry}>
        {countyObj.country}
      </option>
    );
  });
  return (
    <label className="label-country">
      <span>Your country</span>
      <span>
        {!error && (
          <span className="error">
            <span>* enter </span>
            {initialCountry}
          </span>
        )}
      </span>
      <select
        name="countries"
        onChange={onChangeHandler}
        value={initialValue || initialCountry}
      >
        {countriesArray}
      </select>
    </label>
  );
};

export default Dropdown;
