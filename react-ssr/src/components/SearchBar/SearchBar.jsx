import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoadingAction } from '../../store/homeReducer';
import {
  changeValueSearchBarAction,
  changeSearchStringAction,
  changeDisabledBtnSearchBarAction,
} from '../../store/searchBarReducer';
import './SearchBar.scss';

const SearchBar = () => {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.searchBar.valueSearchBar);
  const disabledBtn = useSelector(
    (state) => state.searchBar.disabledBtnSearchBar,
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (valueSearch) {
      dispatch(changeSearchStringAction(valueSearch));
      dispatch(changeDisabledBtnSearchBarAction(true));
      dispatch(changeLoadingAction(true));
    }
  };

  const onChangeValueSearch = (event) => {
    dispatch(changeValueSearchBarAction(event.target.value));
    dispatch(changeDisabledBtnSearchBarAction(false));
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
