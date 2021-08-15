const defaultState = {
  data: {},
  loading: true,
};

const RECEIVING_DETAILS_DATA_FROM_SERVER = 'RECEIVING_DETAILS_DATA_FROM_SERVER';
const CHANGE_LOADING_DETAILS = 'CHANGE_LOADING_DETAILS';

export const detailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVING_DETAILS_DATA_FROM_SERVER:
      return { ...state, data: action.payload };

    case CHANGE_LOADING_DETAILS:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export const changeDetailsDataAction = (payload) => ({
  type: RECEIVING_DETAILS_DATA_FROM_SERVER,
  payload,
});

export const changeLoadingDetailsAction = (payload) => ({
  type: CHANGE_LOADING_DETAILS,
  payload,
});
