/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import {
  defaultState,
  RECEIVING_DATA_FROM_SERVER,
  CHANGE_TOTAL_RESULT,
  CHANGE_LOADING,
  CHANGE_EMPTY,
  changeDataAction,
  changeTotalResultsAction,
  changeLoadingAction,
  changeEmptyAction,
  homeReducer,
} from '../homeReducer';

const data = {
  articles: [
    {
      author: 'Jhon',
      content: 'description',
    },
  ],
};

describe('redux home functions', () => {
  it('RECEIVING_DATA_FROM_SERVER changeDataAction', () => {
    expect(changeDataAction(data)).toEqual({
      type: RECEIVING_DATA_FROM_SERVER,
      payload: data,
    });
  });

  it('CHANGE_TOTAL_RESULT changeTotalResultsAction', () => {
    expect(changeTotalResultsAction(5000)).toEqual({
      type: CHANGE_TOTAL_RESULT,
      payload: 5000,
    });
  });

  it('CHANGE_LOADING changeLoadingAction', () => {
    expect(changeLoadingAction(true)).toEqual({
      type: CHANGE_LOADING,
      payload: true,
    });
  });

  it('CHANGE_EMPTY changeEmptyAction', () => {
    expect(changeEmptyAction(true)).toEqual({
      type: CHANGE_EMPTY,
      payload: true,
    });
  });
});

describe('redux home reducer switch keys', () => {
  test('switch keys RECEIVING_DATA_FROM_SERVER', () => {
    expect(
      homeReducer(defaultState, {
        type: RECEIVING_DATA_FROM_SERVER,
        payload: data,
      }),
    ).toEqual({
      ...defaultState,
      data,
    });
  });

  test('switch keys CHANGE_TOTAL_RESULT', () => {
    expect(
      homeReducer(defaultState, {
        type: CHANGE_TOTAL_RESULT,
        payload: 333,
      }),
    ).toEqual({
      ...defaultState,
      totalResults: 333,
    });
  });

  test('switch keys CHANGE_LOADING', () => {
    expect(
      homeReducer(defaultState, {
        type: CHANGE_LOADING,
        payload: false,
      }),
    ).toEqual({
      ...defaultState,
      loading: false,
    });
  });

  test('switch keys CHANGE_EMPTY', () => {
    expect(
      homeReducer(defaultState, {
        type: CHANGE_EMPTY,
        payload: false,
      }),
    ).toEqual({
      ...defaultState,
      empty: false,
    });
  });
});
