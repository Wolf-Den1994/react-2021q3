/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';
import Pagination, { getPages, getNumberResultPerPage } from './Pagination';

describe('Pagination component', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Provider store={store}>
        <Pagination />
      </Provider>,
      div,
    );
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Pagination />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('loop getPages', () => {
    const result = [
      <option key={1}>{1}</option>,
      <option key={2}>{2}</option>,
      <option key={3}>{3}</option>,
      <option key={4}>{4}</option>,
      <option key={5}>{5}</option>,
    ];
    expect(getPages(5)).toEqual(result);
  });
});

describe('switch keys getNumberResultPerPage', () => {
  test('switch keys getNumberResultPerPage 500 > 100 case 5', () => {
    expect(getNumberResultPerPage(500, 100)).toBe(5);
  });
  test('switch keys getNumberResultPerPage 90 > 100 / 2 case 4', () => {
    expect(getNumberResultPerPage(90, 100)).toBe(4);
  });
  test('switch keys getNumberResultPerPage 22 > 100 / 5 case 3', () => {
    expect(getNumberResultPerPage(22, 100)).toBe(3);
  });
  test('switch keys getNumberResultPerPage default 2', () => {
    expect(getNumberResultPerPage(18, 100)).toBe(2);
  });
});
