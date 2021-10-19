/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner';

describe('Spinner component', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Provider store={store}>
        <Spinner />
      </Provider>,
      div,
    );
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Spinner />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
