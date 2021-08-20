/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import {
  defaultState,
  CHANGE_SORT,
  CHANGE_PAGE_ON_HOME,
  CHANGE_NUMBER_RESULT,
  CHANGE_DISABLED_BTN,
  CHANGE_ACTIVE_BTN_SORT,
  changeSortAction,
  changePageAction,
  changeNumberResultAction,
  changeDisabledBtnAction,
  changeActiveBtnSortAction,
  controlReducer,
} from '../controlReducer';

describe('redux controls functions', () => {
  it('CHANGE_SORT changeSortAction', () => {
    expect(changeSortAction('relevancy')).toEqual({
      type: CHANGE_SORT,
      payload: 'relevancy',
    });
  });

  it('CHANGE_PAGE_ON_HOME changePageAction', () => {
    expect(changePageAction(2)).toEqual({
      type: CHANGE_PAGE_ON_HOME,
      payload: 2,
    });
  });

  it('CHANGE_NUMBER_RESULT changePageAction', () => {
    expect(changeNumberResultAction(20)).toEqual({
      type: CHANGE_NUMBER_RESULT,
      payload: 20,
    });
  });

  it('CHANGE_DISABLED_BTN changeDisabledBtnAction', () => {
    expect(changeDisabledBtnAction([false, true])).toEqual({
      type: CHANGE_DISABLED_BTN,
      payload: [false, true],
    });
  });

  it('CHANGE_ACTIVE_BTN_SORT changeActiveBtnSortAction', () => {
    expect(changeActiveBtnSortAction([false, false, true])).toEqual({
      type: CHANGE_ACTIVE_BTN_SORT,
      payload: [false, false, true],
    });
  });
});

describe('redux control reducer switch keys', () => {
  test('switch keys CHANGE_SORT', () => {
    expect(
      controlReducer(defaultState, {
        type: CHANGE_SORT,
        payload: 'publishedAt',
      }),
    ).toEqual({
      ...defaultState,
      sort: 'publishedAt',
    });
  });

  test('switch keys CHANGE_PAGE_ON_HOME', () => {
    expect(
      controlReducer(defaultState, { type: CHANGE_PAGE_ON_HOME, payload: 3 }),
    ).toEqual({
      ...defaultState,
      page: 3,
    });
  });

  test('switch keys CHANGE_NUMBER_RESULT', () => {
    expect(
      controlReducer(defaultState, { type: CHANGE_NUMBER_RESULT, payload: 50 }),
    ).toEqual({
      ...defaultState,
      numberResult: 50,
    });
  });

  test('switch keys CHANGE_DISABLED_BTN', () => {
    expect(
      controlReducer(defaultState, {
        type: CHANGE_DISABLED_BTN,
        payload: [false, false],
      }),
    ).toEqual({
      ...defaultState,
      disabledBtn: [false, false],
    });
  });

  test('switch keys CHANGE_ACTIVE_BTN_SORT', () => {
    expect(
      controlReducer(defaultState, {
        type: CHANGE_ACTIVE_BTN_SORT,
        payload: [true, false, false],
      }),
    ).toEqual({
      ...defaultState,
      activeBtnSort: [true, false, false],
    });
  });
});
