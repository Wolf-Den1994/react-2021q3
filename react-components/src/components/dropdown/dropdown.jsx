import React from 'react';
import './dropdown.scss';

const Dropdown = ({ countries }) => {
  const countriesArray = countries.sort().map((county) => {
    const low = county.toLowerCase();
    return (
      <option value={low} key={low}>
        {county}
      </option>
    );
  });
  return <select name="countries">{countriesArray}</select>;
};

export default Dropdown;
