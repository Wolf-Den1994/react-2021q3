const defaultState = {
  empty: false,
};

const CHANGE_EMPTY = 'CHANGE_EMPTY';

export const emptyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_EMPTY:
      return { ...state, empty: action.payload };

    default:
      return state;
  }
};

export const changeEmptyAction = (payload) => ({
  type: CHANGE_EMPTY,
  payload,
});
