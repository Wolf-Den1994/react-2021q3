const defaultState = {
  disabledBtnSearchBar: true,
};

const CHANGE_DISABLED_BTN_SEARCHBAR = 'CHANGE_DISABLED_BTN_SEARCHBAR';

export const disabledBtnSearchBarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DISABLED_BTN_SEARCHBAR:
      return { ...state, disabledBtnSearchBar: action.payload };

    default:
      return state;
  }
};

export const changeDisabledBtnSearchBarAction = (payload) => ({
  type: CHANGE_DISABLED_BTN_SEARCHBAR,
  payload,
});
