const defaultState = {
  searchString: '',
};

const CHANGE_SEARCH = 'CHANGE_SEARCH';

export const searchStringReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { ...state, searchString: action.payload };

    default:
      return state;
  }
};

export const changeSearchStringAction = (payload) => ({
  type: CHANGE_SEARCH,
  payload,
});
