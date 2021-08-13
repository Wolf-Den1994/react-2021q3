import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sortReducer } from './sortReducer';
import { searchStringReducer } from './searchStringReducer';
import { numberResultReducer } from './numberResultReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  searchString: searchStringReducer,
  numberResult: numberResultReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
