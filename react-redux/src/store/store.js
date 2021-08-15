import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { homeReducer } from './homeReducer';
import { detailsReducer } from './detailsReducer';
import { searchBarReducer } from './searchBarReducer';
import { controlReducer } from './controlReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  control: controlReducer,
  searchBar: searchBarReducer,
  details: detailsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
