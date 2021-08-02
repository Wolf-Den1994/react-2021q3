import React from 'react';
import './dropdown.scss';

const Dropdown = ({ countries, onChangeHandler }) => {
  const countriesSort = countries.sort();
  const countriesArray = countriesSort.map((countyObj) => {
    const low = countyObj.country.toLowerCase();
    return (
      <option
        value={low}
        key={countyObj.id}
        disabled={low === 'your country'}
      >
        {countyObj.country}
      </option>
    );
  });
  return (
    <label className="label-country">
      Your country
      <select name="countries" onChange={onChangeHandler} defaultValue='your country'>
        {countriesArray}
      </select>
    </label>
  );
};

export default Dropdown;
