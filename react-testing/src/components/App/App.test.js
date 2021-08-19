import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import App from './App';

// eslint-disable-next-line no-undef
it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );
});
