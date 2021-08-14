import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { sortReducer } from './sortReducer';
import { searchStringReducer } from './searchStringReducer';
import { numberResultReducer } from './numberResultReducer';
import { pageReducer } from './pageReducer';
import { dataReducer } from './dataReducer';
import { totalResultsReducer } from './totalResultReducer';
import { loadingReducer } from './loadingReducer';
import { emptyReducer } from './emptyReducer';
import { disabledBtnReducer } from './disabledBtnReducer';
import { detailsDataReducer } from './detailsDataReducer';
import { loadingDetailsReducer } from './loadingForDetailsPageReducer';
import { valueSearchBarReducer } from './valueSearchBar';
import { disabledBtnSearchBarReducer } from './disabledBtnSearchBar';
import { activeBtnSortReducer } from './activeBtnSortReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  searchString: searchStringReducer,
  numberResult: numberResultReducer,
  page: pageReducer,
  data: dataReducer,
  totalResults: totalResultsReducer,
  loading: loadingReducer,
  empty: emptyReducer,
  disabledBtn: disabledBtnReducer,
  detailsData: detailsDataReducer,
  loadingDetails: loadingDetailsReducer,
  valueSearchBar: valueSearchBarReducer,
  disabledBtnSearchBar: disabledBtnSearchBarReducer,
  activeBtnSort: activeBtnSortReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
