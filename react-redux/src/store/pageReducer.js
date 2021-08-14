const defaultState = {
  page: 1,
};

const CHANGE_PAGE_ON_HOME = 'CHANGE_PAGE_ON_HOME';

export const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PAGE_ON_HOME:
      return { ...state, page: action.payload };

    default:
      return state;
  }
};

export const changePageAction = (payload) => ({
  type: CHANGE_PAGE_ON_HOME,
  payload,
});
