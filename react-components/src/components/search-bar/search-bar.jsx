import React from 'react';
import './search-bar.scss';

const SearchBar = () => (
  <>
    <form action="GET" className="search-form">
      <label htmlFor="search" className="search-label">
        Search
      </label>
      <input
        className="search-input"
        type="text"
        id="search"
        placeholder="Search-bar"
      />
      <button className="search-btn" aria-label="search" type="button" />
    </form>
  </>
);

export default SearchBar;
