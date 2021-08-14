const defaultState = {
  activeBtnSort: [false, true, false],
};

const CHANGE_ACTIVE_BTN_SORT = 'CHANGE_ACTIVE_BTN_SORT';

export const activeBtnSortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_BTN_SORT:
      return { ...state, activeBtnSort: action.payload };

    default:
      return state;
  }
};

export const changeActiveBtnSortAction = (payload) => ({
  type: CHANGE_ACTIVE_BTN_SORT,
  payload,
});
