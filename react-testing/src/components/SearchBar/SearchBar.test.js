/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('render without crashing', async () => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );

    const value = 'react';
    const input = screen.getByPlaceholderText(/Search-bar/i);
    const leftClick = { button: 0 };

    expect(screen.getByText(/search/i)).toBeInTheDocument();
    userEvent.type(input, 'react');
    expect(input).toHaveValue('react');
    userEvent.click(screen.getByTestId('search-btn'), leftClick);
    expect(screen.getByText(/search/i)).toBeInTheDocument();

    await userEvent.type(input, value);
    await act(async () => {
      userEvent.click(screen.getByTestId('search-btn'));
    });
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SearchBar />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
