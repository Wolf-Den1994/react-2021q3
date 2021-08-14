const defaultState = {
  totalResults: null,
};

const CHANGE_TOTAL_RESULT = 'CHANGE_TOTAL_RESULT';

export const totalResultsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TOTAL_RESULT:
      return { ...state, totalResults: action.payload };

    default:
      return state;
  }
};

export const changeTotalResultsAction = (payload) => ({
  type: CHANGE_TOTAL_RESULT,
  payload,
});
