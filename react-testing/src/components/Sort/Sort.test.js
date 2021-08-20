/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';
import Sort from './Sort';

describe('Sort component', () => {
  it('render without crashing', () => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Provider store={store}>
        <Sort />
      </Provider>,
    );

    const leftClick = { button: 0 };
    const btnRelevancy = screen.getByTestId(/relevancy/i);
    const btnPopularity = screen.getByTestId(/popularity/i);
    const btnPublished = screen.getByTestId(/publishedAt/i);

    userEvent.click(btnRelevancy, leftClick);
    userEvent.click(btnPopularity, leftClick);
    userEvent.click(btnPublished, leftClick);

    userEvent.keyboard('{enter}');
    userEvent.keyboard('{esc}');
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Sort />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
