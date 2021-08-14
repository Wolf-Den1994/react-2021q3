const defaultState = {
  data: {},
};

const RECEIVING_DATA_FROM_SERVER = 'RECEIVING_DATA_FROM_SERVER';

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVING_DATA_FROM_SERVER:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export const changeDataAction = (payload) => ({
  type: RECEIVING_DATA_FROM_SERVER,
  payload,
});
