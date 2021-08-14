const defaultState = {
  valueSearchBar: '',
};

const CHANGE_VALUE_SEARCHBAR = 'CHANGE_VALUE_SEARCHBAR';

export const valueSearchBarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VALUE_SEARCHBAR:
      return { ...state, valueSearchBar: action.payload };

    default:
      return state;
  }
};

export const changeValueSearchBarAction = (payload) => ({
  type: CHANGE_VALUE_SEARCHBAR,
  payload,
});
