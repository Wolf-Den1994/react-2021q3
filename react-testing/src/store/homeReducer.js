import NewsServise from '../services/new-service';

export const defaultState = {
  data: {},
  totalResults: null,
  loading: false,
  empty: false,
};

export const RECEIVING_DATA_FROM_SERVER = 'RECEIVING_DATA_FROM_SERVER';
export const CHANGE_TOTAL_RESULT = 'CHANGE_TOTAL_RESULT';
export const CHANGE_LOADING = 'CHANGE_LOADING';
export const CHANGE_EMPTY = 'CHANGE_EMPTY';

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

export const fetchDataForHome = (searchString, sort, numberResult, page) => {
  const data = (dispatch) => {
    const newsServise = new NewsServise();
    return newsServise
      .getResourse(searchString, sort, numberResult, page)
      .then((response) => {
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          const addId = response.articles.map((el, index) => {
            return { ...el, id: index + numberResult * (page - 1) };
          });
          const objData = {
            articles: addId,
          };
          dispatch(changeDataAction(objData));
        }
        dispatch(changeTotalResultsAction(response.totalResults));
        if (Object.keys(response).length) dispatch(changeLoadingAction(false));
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          if (Object.keys(response.articles).length) {
            dispatch(changeEmptyAction(true));
          } else {
            dispatch(changeEmptyAction(false));
          }
        }
      })
      .catch((e) => console.error('Error: ', e));
  };
  return data;
};
