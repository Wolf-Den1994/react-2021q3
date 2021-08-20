export const defaultState = {
  sort: 'popularity',
  page: 1,
  numberResult: 10,
  disabledBtn: [true, false],
  activeBtnSort: [false, true, false],
};

export const CHANGE_SORT = 'CHANGE_SORT';
export const CHANGE_PAGE_ON_HOME = 'CHANGE_PAGE_ON_HOME';
export const CHANGE_NUMBER_RESULT = 'CHANGE_NUMBER_RESULT';
export const CHANGE_DISABLED_BTN = 'CHANGE_DISABLED_BTN';
export const CHANGE_ACTIVE_BTN_SORT = 'CHANGE_ACTIVE_BTN_SORT';

export const controlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SORT:
      return { ...state, sort: action.payload };

    case CHANGE_PAGE_ON_HOME:
      return { ...state, page: action.payload };

    case CHANGE_NUMBER_RESULT:
      return { ...state, numberResult: action.payload };

    case CHANGE_DISABLED_BTN:
      return { ...state, disabledBtn: action.payload };

    case CHANGE_ACTIVE_BTN_SORT:
      return { ...state, activeBtnSort: action.payload };

    default:
      return state;
  }
};

export const changeSortAction = (payload) => ({
  type: CHANGE_SORT,
  payload,
});

export const changePageAction = (payload) => ({
  type: CHANGE_PAGE_ON_HOME,
  payload,
});

export const changeNumberResultAction = (payload) => ({
  type: CHANGE_NUMBER_RESULT,
  payload,
});

export const changeDisabledBtnAction = (payload) => ({
  type: CHANGE_DISABLED_BTN,
  payload,
});

export const changeActiveBtnSortAction = (payload) => ({
  type: CHANGE_ACTIVE_BTN_SORT,
  payload,
});
