/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App component', () => {
  afterEach(cleanup);

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

  it('render app correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(getByTestId('search')).toHaveTextContent('Search');
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
