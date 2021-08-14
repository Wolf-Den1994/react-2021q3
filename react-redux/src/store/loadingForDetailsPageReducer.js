const defaultState = {
  loadingDetails: true,
};

const CHANGE_LOADING_DETAILS = 'CHANGE_LOADING_DETAILS';

export const loadingDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOADING_DETAILS:
      return { ...state, loadingDetails: action.payload };

    default:
      return state;
  }
};

export const changeLoadingDetailsAction = (payload) => ({
  type: CHANGE_LOADING_DETAILS,
  payload,
});
