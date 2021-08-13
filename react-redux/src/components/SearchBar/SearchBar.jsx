import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchStringAction } from '../../store/searchStringReducer';
import './SearchBar.scss';

const SearchBar = ({ onLoading }) => {
  const dispatch = useDispatch();

  const [valueSearch, setValueSearch] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (valueSearch) {
      dispatch(changeSearchStringAction(valueSearch));
      setDisabledBtn(true);
      onLoading(true);
    }
  };

  const onChangeValueSearch = (event) => {
    setValueSearch(event.target.value);
    setDisabledBtn(false);
  };

  return (
    <div className="search">
      <form action="GET" className="search-form" onSubmit={onSubmitHandler}>
        <label htmlFor="search" className="search-label">
          Search
        </label>
        <input
          className="search-input"
          type="text"
          id="search"
          placeholder="Search-bar"
          title="Search-bar"
          onChange={onChangeValueSearch}
        />
        <button
          className="search-btn"
          aria-label="search"
          type="submit"
          disabled={disabledBtn}
        />
      </form>
    </div>
  );
};

export default SearchBar;
