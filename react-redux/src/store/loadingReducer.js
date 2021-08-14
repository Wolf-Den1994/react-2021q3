const defaultState = {
  loading: false,
};

const CHANGE_LOADING = 'CHANGE_LOADING';

export const loadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export const changeLoadingAction = (payload) => ({
  type: CHANGE_LOADING,
  payload,
});
