const defaultState = {
  sort: 'popularity',
};

const CHANGE_SORT = 'CHANGE_SORT';

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SORT:
      return { ...state, sort: action.payload };

    default:
      return state;
  }
};

export const changeSortAction = (payload) => ({
  type: CHANGE_SORT,
  payload,
});
