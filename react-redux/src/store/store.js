import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sortReducer } from './sortReducer';
import { searchStringReducer } from './searchStringReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  searchString: searchStringReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
