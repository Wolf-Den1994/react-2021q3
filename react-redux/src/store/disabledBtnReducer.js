const defaultState = {
  disabledBtn: [true, false],
};

const CHANGE_DISABLED_BTN = 'CHANGE_DISABLED_BTN';

export const disabledBtnReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DISABLED_BTN:
      return { ...state, disabledBtn: action.payload };

    default:
      return state;
  }
};

export const changeDisabledBtnAction = (payload) => ({
  type: CHANGE_DISABLED_BTN,
  payload,
});
