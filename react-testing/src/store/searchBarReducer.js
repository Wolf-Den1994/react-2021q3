export const defaultState = {
  valueSearchBar: '',
  searchString: '',
  disabledBtnSearchBar: true,
};

export const CHANGE_VALUE_SEARCHBAR = 'CHANGE_VALUE_SEARCHBAR';
export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const CHANGE_DISABLED_BTN_SEARCHBAR = 'CHANGE_DISABLED_BTN_SEARCHBAR';

export const searchBarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VALUE_SEARCHBAR:
      return { ...state, valueSearchBar: action.payload };

    case CHANGE_SEARCH:
      return { ...state, searchString: action.payload };

    case CHANGE_DISABLED_BTN_SEARCHBAR:
      return { ...state, disabledBtnSearchBar: action.payload };

    default:
      return state;
  }
};

export const changeValueSearchBarAction = (payload) => ({
  type: CHANGE_VALUE_SEARCHBAR,
  payload,
});

export const changeSearchStringAction = (payload) => ({
  type: CHANGE_SEARCH,
  payload,
});

export const changeDisabledBtnSearchBarAction = (payload) => ({
  type: CHANGE_DISABLED_BTN_SEARCHBAR,
  payload,
});
