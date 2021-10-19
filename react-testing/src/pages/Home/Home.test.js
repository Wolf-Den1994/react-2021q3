/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home component', () => {
  test('full app rendering/navigating', () => {
    const history = createMemoryHistory();
    const div = document.createElement('div');
    ReactDOM.render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>,
      div,
    );
  });
});
