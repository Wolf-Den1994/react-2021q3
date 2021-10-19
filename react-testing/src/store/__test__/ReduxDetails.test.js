/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import {
  defaultState,
  RECEIVING_DETAILS_DATA_FROM_SERVER,
  CHANGE_LOADING_DETAILS,
  changeDetailsDataAction,
  changeLoadingDetailsAction,
  detailsReducer,
} from '../detailsReducer';

const data = {
  articles: [
    {
      author: 'Jhon',
      content: 'description',
    },
  ],
};

describe('redux details functions', () => {
  it('RECEIVING_DETAILS_DATA_FROM_SERVER changeDetailsDataAction', () => {
    expect(changeDetailsDataAction(data)).toEqual({
      type: RECEIVING_DETAILS_DATA_FROM_SERVER,
      payload: data,
    });
  });

  it('CHANGE_LOADING_DETAILS changeLoadingDetailsAction', () => {
    expect(changeLoadingDetailsAction(false)).toEqual({
      type: CHANGE_LOADING_DETAILS,
      payload: false,
    });
  });
});

describe('redux details reducer switch keys', () => {
  test('switch keys RECEIVING_DETAILS_DATA_FROM_SERVER', () => {
    expect(
      detailsReducer(defaultState, {
        type: RECEIVING_DETAILS_DATA_FROM_SERVER,
        payload: data,
      }),
    ).toEqual({
      ...defaultState,
      data,
    });
  });

  test('switch keys CHANGE_LOADING_DETAILS', () => {
    expect(
      detailsReducer(defaultState, {
        type: CHANGE_LOADING_DETAILS,
        payload: true,
      }),
    ).toEqual({
      ...defaultState,
      loading: true,
    });
  });
});
