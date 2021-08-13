const defaultState = {
  numberResult: 10,
};

const CHANGE_NUMBER_RESULT = 'CHANGE_NUMBER_RESULT';

export const numberResultReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_NUMBER_RESULT:
      return { ...state, numberResult: action.payload };

    default:
      return state;
  }
};

export const changeNumberResultAction = (payload) => ({
  type: CHANGE_NUMBER_RESULT,
  payload,
});
