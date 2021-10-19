import NewsServise from '../services/new-service';

export const defaultState = {
  data: {},
  loading: true,
};

export const RECEIVING_DETAILS_DATA_FROM_SERVER =
  'RECEIVING_DETAILS_DATA_FROM_SERVER';
export const CHANGE_LOADING_DETAILS = 'CHANGE_LOADING_DETAILS';

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

export function fetchDataForDetails(q, sort, id) {
  const data = (dispatch) => {
    const newsServise = new NewsServise();
    dispatch(changeLoadingDetailsAction(true));
    newsServise
      .getResourseById(q, sort)
      .then((response) => {
        if (Object.prototype.hasOwnProperty.call(response, 'articles')) {
          const result = response.articles.find((el, index) => +id === index);
          const obj = {
            articles: [result],
          };
          dispatch(changeDetailsDataAction(obj));
        }
      })
      .catch((e) => console.error('Error: ', e))
      .finally(() => {
        dispatch(changeLoadingDetailsAction(false));
      });
  };
  return data;
}
