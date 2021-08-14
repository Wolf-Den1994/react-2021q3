const defaultState = {
  detailsData: {},
};

const RECEIVING_DETAILS_DATA_FROM_SERVER = 'RECEIVING_DETAILS_DATA_FROM_SERVER';

export const detailsDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVING_DETAILS_DATA_FROM_SERVER:
      return { ...state, detailsData: action.payload };

    default:
      return state;
  }
};

export const changeDetailsDataAction = (payload) => ({
  type: RECEIVING_DETAILS_DATA_FROM_SERVER,
  payload,
});
