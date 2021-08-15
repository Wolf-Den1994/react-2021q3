import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDisabledBtnSearchBarAction } from '../../store/disabledBtnSearchBar';
import { changeLoadingAction } from '../../store/homeReducer';
import { changeSearchStringAction } from '../../store/searchStringReducer';
import { changeValueSearchBarAction } from '../../store/valueSearchBar';
import './SearchBar.scss';

const SearchBar = () => {
  const dispatch = useDispatch();
  const valueSearch = useSelector(
    (state) => state.valueSearchBar.valueSearchBar,
  );
  const disabledBtn = useSelector(
    (state) => state.disabledBtnSearchBar.disabledBtnSearchBar,
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
