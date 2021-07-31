import React from 'react';
import './dropdown.scss';

const Dropdown = ({ countries, onChangeHandler }) => {
  const countriesSort = countries.sort();
  countriesSort.unshift('your country');
  const countriesArray = countriesSort.map((county) => {
    const low = county.toLowerCase();
    return (
      <option value={low} key={low} disabled={low === 'your country'}>
        {county}
      </option>
    );
  });
  return <select name="countries" onChange={onChangeHandler}>{countriesArray}</select>;
};

export default Dropdown;
