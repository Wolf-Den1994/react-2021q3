/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import {
  defaultState,
  CHANGE_VALUE_SEARCHBAR,
  CHANGE_SEARCH,
  CHANGE_DISABLED_BTN_SEARCHBAR,
  changeValueSearchBarAction,
  changeSearchStringAction,
  changeDisabledBtnSearchBarAction,
  searchBarReducer,
} from '../searchBarReducer';

describe('redux searchBar functions', () => {
  it('CHANGE_VALUE_SEARCHBAR changeValueSearchBarAction', () => {
    expect(changeValueSearchBarAction('react')).toEqual({
      type: CHANGE_VALUE_SEARCHBAR,
      payload: 'react',
    });
  });

  it('CHANGE_SEARCH changeSearchStringAction', () => {
    expect(changeSearchStringAction('apple')).toEqual({
      type: CHANGE_SEARCH,
      payload: 'apple',
    });
  });

  it('CHANGE_DISABLED_BTN_SEARCHBAR changeDisabledBtnSearchBarAction', () => {
    expect(changeDisabledBtnSearchBarAction(false)).toEqual({
      type: CHANGE_DISABLED_BTN_SEARCHBAR,
      payload: false,
    });
  });
});

describe('redux searchBar reducer switch keys', () => {
  test('switch keys CHANGE_VALUE_SEARCHBAR', () => {
    expect(
      searchBarReducer(defaultState, {
        type: CHANGE_VALUE_SEARCHBAR,
        payload: 'android',
      }),
    ).toEqual({
      ...defaultState,
      valueSearchBar: 'android',
    });
  });

  test('switch keys CHANGE_SEARCH', () => {
    expect(
      searchBarReducer(defaultState, {
        type: CHANGE_SEARCH,
        payload: 'kek',
      }),
    ).toEqual({
      ...defaultState,
      searchString: 'kek',
    });
  });

  test('switch keys CHANGE_DISABLED_BTN_SEARCHBAR', () => {
    expect(
      searchBarReducer(defaultState, {
        type: CHANGE_DISABLED_BTN_SEARCHBAR,
        payload: true,
      }),
    ).toEqual({
      ...defaultState,
      disabledBtnSearchBar: true,
    });
  });
});
