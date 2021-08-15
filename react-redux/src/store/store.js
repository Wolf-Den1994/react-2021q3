import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { sortReducer } from './sortReducer';
import { searchStringReducer } from './searchStringReducer';
import { numberResultReducer } from './numberResultReducer';
import { pageReducer } from './pageReducer';
import { homeReducer } from './homeReducer';
import { disabledBtnReducer } from './disabledBtnReducer';
import { valueSearchBarReducer } from './valueSearchBar';
import { disabledBtnSearchBarReducer } from './disabledBtnSearchBar';
import { activeBtnSortReducer } from './activeBtnSortReducer';
import { detailsReducer } from './detailsReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  sort: sortReducer,
  searchString: searchStringReducer,
  numberResult: numberResultReducer,
  page: pageReducer,
  disabledBtn: disabledBtnReducer,
  details: detailsReducer,
  valueSearchBar: valueSearchBarReducer,
  disabledBtnSearchBar: disabledBtnSearchBarReducer,
  activeBtnSort: activeBtnSortReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
