import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sortReducer } from './sortReducer';
import { customerReducer } from './arrayReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
