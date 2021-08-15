const defaultState = {
  data: {},
  totalResults: null,
  loading: false,
  empty: false,
};

const RECEIVING_DATA_FROM_SERVER = 'RECEIVING_DATA_FROM_SERVER';
const CHANGE_TOTAL_RESULT = 'CHANGE_TOTAL_RESULT';
const CHANGE_LOADING = 'CHANGE_LOADING';
const CHANGE_EMPTY = 'CHANGE_EMPTY';

export const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVING_DATA_FROM_SERVER:
      return { ...state, data: action.payload };

    case CHANGE_TOTAL_RESULT:
      return { ...state, totalResults: action.payload };

    case CHANGE_LOADING:
      return { ...state, loading: action.payload };

    case CHANGE_EMPTY:
      return { ...state, empty: action.payload };

    default:
      return state;
  }
};

export const changeDataAction = (payload) => ({
  type: RECEIVING_DATA_FROM_SERVER,
  payload,
});

export const changeTotalResultsAction = (payload) => ({
  type: CHANGE_TOTAL_RESULT,
  payload,
});

export const changeLoadingAction = (payload) => ({
  type: CHANGE_LOADING,
  payload,
});

export const changeEmptyAction = (payload) => ({
  type: CHANGE_EMPTY,
  payload,
});
