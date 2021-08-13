import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App/App';
import './styles.scss';
import { Counter } from './features/counter/Counter';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Counter />
  </Provider>,
  document.getElementById('root'),
);
